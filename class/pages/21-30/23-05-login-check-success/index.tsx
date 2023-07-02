import { withAuth } from "../26-04-generic-hoc";
import { useQuery, gql } from "@apollo/client";
// import { useEffect } from "react";
// import { useRouter } from "next/router";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

function LoginSuccessPage() {
  // const router = useRouter();
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  // 로그인이 필요한 모든 페이지에 이걸 다 복사 붙여넣기 해주어야 한다는 문제점이 있다.
  // 또한 유지 보수하는데도 어려움이 있다.
  // 이를 따로 떼서 아래가 먼저 실행되고 다음 로직이 실행되도록 해보자.

  // useEffect(() => {
  //   if (!localStorage.getItem("accessToken")) {
  //     alert("로그인 후 이용 가능합니다.");
  //     router.push("/23-04-login-check");
  //   }
  // }, []);

  return <div>{data?.fetchUserLoggedIn.name}님 환영합니다!!!</div>;
}

export default withAuth(LoginSuccessPage);
