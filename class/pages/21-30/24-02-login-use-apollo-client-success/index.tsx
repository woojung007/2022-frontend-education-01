import { useRecoilState } from "recoil";
import { userInfoState } from "../../../../market-frontend/src/components/commons/store/index";
import { withAuth } from "../26-04-generic-hoc";

function LoginSuccessPage() {
  const [userInfo] = useRecoilState(userInfoState);

  return <div>{userInfo.name}님 환영합니다!!!</div>;
}

export default withAuth(LoginSuccessPage);
