import { useState } from "react";
import { useMutation, gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../src/commons/store/index";

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
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser] = useMutation(LOGIN_USER);
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onClickLogin = async () => {
    const result = await loginUser({
      variables: {
        email,
        password,
      },
    });
    const accessToken = result.data.loginUser.accessToken;
    setAccessToken(accessToken);
    localStorage.setItem("accessToken", accessToken);
    console.log(accessToken);
    alert(" 로그인에 성공하였습니다!");
  };

  const moveToBasket = () => {
    const basket = JSON.parse(localStorage.getItem("basket") || "[]");
    console.log(basket);
    if (basket.length >= 1) {
      alert("비회원으로 담긴 게시물 장바구니가 존재합니다. 이동하시겠습니까?");
      router.push("/quiz06/basket");
    }
  };
  return (
    <div>
      <div>{data?.fetchUserLoggedIn.name}님 환영합니다!!!</div>
      email: <input onChange={onChangeEmail} type="text" />
      <br />
      password: <input onChange={onChangePassword} type="password" />
      <br />
      <button type="submit" onClick={onClickLogin}>
        로그인하기
      </button>
      <button onClick={moveToBasket}>이동하기</button>
    </div>
  );
}
