import { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../../src/commons/store/index";

const LOGIN_USER = gql`
  mutation loginUserExample($email: String!, $password: String!) {
    loginUserExample(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function LoginPage() {
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUserExample] = useMutation(LOGIN_USER);

  const onChangeEmail = (event: any) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event: any) => {
    setPassword(event.target.value);
  };

  const onClickLogin = async () => {
    const result = await loginUserExample({
      variables: {
        email,
        password,
      },
    });
    const accessToken = result.data.loginUserExample.accessToken;
    setAccessToken(accessToken);
    console.log(accessToken);
    alert(" 로그인에 성공하였습니다!");
    router.push("/quiz-30/2-1/login-success");
  };

  return (
    <div>
      email: <input onChange={onChangeEmail} type="text" />
      <br />
      password: <input onChange={onChangePassword} type="password" />
      <br />
      <button onClick={onClickLogin}>로그인하기</button>
    </div>
  );
}
