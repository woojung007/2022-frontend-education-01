import { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../../market-frontend/src/components/commons/store/index";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function LoginPage() {
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const router = useRouter();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser] = useMutation(LOGIN_USER);

  const onChangeId = (event: any) => {
    setId(event.target.value);
  };

  const onChangePassword = (event: any) => {
    setPassword(event.target.value);
  };

  const onClickLogin = async () => {
    const result = await loginUser({
      variables: {
        email: id,
        password,
      },
    });
    const accessToken = result.data.loginUser.accessToken;
    setAccessToken(accessToken);
    console.log(accessToken);
    alert("로그인에 성공하였습니다!");
    router.push("/22-quiz/22-02-login-success");
  };

  return (
    <div>
      id(email): <input onChange={onChangeId} type="text" />
      <br />
      password: <input onChange={onChangePassword} type="password" />
      <br />
      <button onClick={onClickLogin}>로그인하기</button>
    </div>
  );
}
