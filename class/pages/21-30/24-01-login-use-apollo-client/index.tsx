import { useState } from "react";
import { useMutation, gql, useApolloClient } from "@apollo/client";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import {
  accessTokenState,
  userInfoState,
} from "../../../../market-frontend/src/components/commons/store/index";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

export default function LoginPage() {
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [, setUserInfo] = useRecoilState(userInfoState);
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser] = useMutation(LOGIN_USER);
  const client = useApolloClient();

  const onChangeEmail = (event: any) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event: any) => {
    setPassword(event.target.value);
  };

  const onClickLogin = async () => {
    // 1. 로그인하기
    const result = await loginUser({
      variables: {
        email,
        password,
      },
    });
    const accessToken = result.data.loginUser.accessToken;
    console.log(accessToken);

    // 2. 유저정보 받아오기
    // 유저정보를 받아오기 위해서는 로그인 정보(accessToken)를 가져와야 하는데
    // 이는 함수가 완전히 끝나야 가져올 수 있으므로
    // 헤더를 조작해서 직접 가져와야 한다.
    const resultUserInfo = await client.query({
      query: FETCH_USER_LOGGED_IN,
      context: {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    });

    const userInfo = resultUserInfo.data.fetchUserLoggedIn;
    console.log(userInfo);

    // 3. 글로벌 스테이트에 저장하기
    setAccessToken(accessToken);
    setUserInfo(userInfo);
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("userInfo", JSON.stringify(userInfo)); // 객체를 문자열로 변환

    // 4. 로그인 성공페이지로 이동하기
    alert(" 로그인에 성공하였습니다!");
    router.push("/24-02-login-use-apollo-client-success");
  };

  return (
    <form onSubmit={onClickLogin}>
      email: <input onChange={onChangeEmail} type="text" />
      <br />
      password: <input onChange={onChangePassword} type="password" />
      <br />
      <button type="submit" onClick={onClickLogin}>
        로그인하기
      </button>
      <button type="button" onClick={onClickLogin}>
        나만의버튼
      </button>
      <button type="reset" onClick={onClickLogin}>
        로그인하기
      </button>
    </form>
  );
}
