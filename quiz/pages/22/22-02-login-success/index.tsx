import { useQuery, gql } from "@apollo/client";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { useRouter } from "next/router";
import { accessTokenState } from "../../../../../market-frontend/src/components/commons/store/index";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

export default function LoginSuccessPage() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const [accessToken] = useRecoilState(accessTokenState);
  const router = useRouter();

  useEffect(() => {
    if (!accessToken) {
      alert("로그인을 먼저 해주세요");
      router.push("/22-quiz/22-01-login");
    }
  }, [accessToken]);

  return <div>{data?.fetchUserLoggedIn.name}님 환영합니다!!!</div>;
}
