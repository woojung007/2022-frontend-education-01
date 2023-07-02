import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import {} from "../libraries/getAccessToken";
import { accessTokenState, restoreAccessTokenLoadable } from "../store/index";
import { Modal } from "antd";
// @ts-ignore

export const withAuth = (Component) => (props) => {
  const [accessToken] = useRecoilState(accessTokenState);
  const restoreAccessToken = useRecoilValueLoadable(restoreAccessTokenLoadable);
  const router = useRouter();

  // // 두번 요청되기 때문에 조금 비효율 적인 방식
  // useEffect(()=>{
  //   if(!accessToken){
  //     getAccessToken().then((newAccessToken)=>{
  //       setAccessToken(newAccessToken)
  //       if(!newAccessToken){
  //         alert("로그인 후 이용 가능합니다.")
  //         router.push('/user/login')
  //       }
  //     })
  //   }
  //   },[])

  // 2. 로딩방식
  // useEffect(()=>{
  //   if(!isLoaded && !accessToken){
  //     getAccessToken().then((newAccessToken)=>{
  //       setAccessToken(newAccessToken)
  //       if(!newAccessToken){
  //         alert("로그인 후 이용 가능합니다.")
  //         router.push('/user/login')
  //       }
  //     })
  //   }
  //   },[isLoaded])

  useEffect(() => {
    if (!accessToken) {
      restoreAccessToken.toPromise().then((newAccessToken) => {
        if (!newAccessToken) {
          Modal.error({ content: "로그인을 먼저 해주세요." });
          router.push("/user/login");
        }
      });
    }
  }, []);

  return <Component {...props} />;
};
