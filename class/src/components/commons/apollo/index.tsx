import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
  fromPromise,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { useRecoilState } from "recoil";
import { accessTokenState, userInfoState } from "../../../commons/store/index";
import { ReactNode, useEffect } from "react";
import { onError } from "@apollo/client/link/error";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";

const APOLLO_CACHE = new InMemoryCache();

interface IApolloSettingProps {
  children: ReactNode;
}

export default function ApolloSetting(props: IApolloSettingProps) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [, setUserInfo] = useRecoilState(userInfoState);

  // ///////////////////////////////////////////////////////////////////
  // Next.js의 프리렌더링으로 인한 localStorage is not defined 에러 해결하기
  // Next.js 에서는 페이지가 렌더링되기 전에 프론트엔드 서버에서 프리렌더링이 일어나는데
  // 이 때문에 로컬스토리지에서 로그인 정보를 가져올 때 에러가 난다.
  // 두가지 방법을 사용해서 이 에러를 해결해보자.
  // ///////////////////////////////////////////////////////////////////
  // 프리렌더링시 문제되는 코드 !!
  // const mylocalstorageAccessToken = localStorage.getItem("accessToken")
  // setAccessToken(mylocalstorageAccessToken || "") // 있으면 accessToken 넣어주고 없으면 초기값인 빈문자열 넣어줘
  // ///////////////////////////////////////////////////////////////////

  // 0. 더이상 지원되지 않는 방법 !!
  // if(process.browser){
  // }else{
  // }

  // 1. 첫번째 !! - 로컬 스토리지 코드가 브라우저에서 실행되게 하는 방법
  // window는 브라우저를 의미함
  // 브라우저에서 실행이 됐을 때 window가 있다. ex) window.alert()
  if (typeof window !== "undefined") {
    // 브라우저 환경이라면
    console.log("여기는 브라우저다!!!!!");
    // const mylocalstorageAccessToken = localStorage.getItem("accessToken")
    // setAccessToken(mylocalstorageAccessToken || "")
  } else {
    // 브라우저가 아닌 프론트엔드 서버라면
    // 로컬스토리지 getItem 하면 안된다.
    console.log("여기는 프론트엔드 서버 yarn dev다!!!!!");
  }

  // 2. 두번째 !! - 프리렌더링이 되고 나서 실제 렌더링 될 때 실행되게 하는 방법(useEffect 사용)
  useEffect(() => {
    // 2-1. 기존 방식(refreshToken 이전)
    console.log("지금은 브라우저다!!!");
    const accessToken = localStorage.getItem("accessToken");
    const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
    setAccessToken(accessToken || "");
    setUserInfo(userInfo || "");

    // 2-2. 새로운 방식(refreshToken 이후)
    // getAccessToken().then((newAccessToken) => {
    //   setAccessToken(newAccessToken);
    // });
  }, []);

  // ///////////////////////////////////////////////////////////////////

  // operation = 방금 실패한 쿼리 / forward = 다시 전송해 줘
  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    // 1-1. 에러를 캐치
    if (graphQLErrors) {
      // graphQLErrors 배열에 담겨있는 애들을 err라고 명명해서 사용할거다
      for (const err of graphQLErrors) {
        // 1-2. 해당 에러가 토큰만료 에러인지 체크(UNAUTHENTICATED)
        if (err.extensions.code === "UNAUTHENTICATED") {
          return fromPromise(
            // 2-1. refreshToken으로 accessToken을 재발급 받기
            // 아직 apollo 세팅 안돼서 사용 못함 / axios, XMLHttpRequest등 만 사용 가능
            // graphql-request : apollo 없이 graphql 사용하는 방법
            // "../../../commons/libraries/getAccessToken" 에서 가져옴
            getAccessToken().then((newAccessToken) => {
              // 2-2. 재발급 받은 accessToken 저장하기
              setAccessToken(newAccessToken);
              // 3-1. 재발급 받은 토큰으로 accessToken 바꿔치기 (토큰 바꿔치기)
              operation.setContext({
                headers: {
                  ...operation.getContext().headers, // 만료된 토큰이 추가되어있는 상태
                  Authorization: `Bearer ${newAccessToken}`, // accessToken만 새거로 바꿔치기
                },
              });

              // 3-2. 재발급 받은 accessToken으로 방금 실패한 쿼리 재요청하기 (변경된 operation 재요청하기)
            })
          ).flatMap(() => forward(operation));
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://backend06.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
    credentials: "include", // include 해놓은 이상 쿠키에 첨부된다. (중요한 내용들을 포함 시킬거야)
  });

  // client apollo 세팅 완료!!
  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]),
    cache: APOLLO_CACHE,
    connectToDevTools: true,
  });

  // prettier-ignore
  return (
    <ApolloProvider client={client}>
      {props.children}
    </ApolloProvider>
  )
}
