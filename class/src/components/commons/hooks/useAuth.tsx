import { useRouter } from "next/router";
import { useEffect } from "react";

// aaa해도 되지만 이름은 useAAA라고 해주자
export function useAuth() {
  //   const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  // 권한분기 로직 추가하기
  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      alert("로그인 후 이용 가능합니다.");
      router.push("/23-04-login-check");
    }
  }, []);

  // return {
  //     isLoading: isLoading
  // }
}
