import { useRouter } from "next/router";
import { useEffect } from "react";
// @ts-ignore

export const withAuth = (Component) => (props) => {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      alert("로그인 후 이용 가능합니다.");
      router.push("/user/login");
    }
  }, []);

  return <Component {...props} />;
};
