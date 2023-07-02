import { useRecoilState } from "recoil";
import { userInfoState } from "../../../src/commons/store/index";
import { withAuth } from "../../../src/components/commons/hocs/withAuth";

function LoginSuccessPage() {
  const [userInfo] = useRecoilState(userInfoState);

  return <div>{userInfo.name}님 반갑습니다!!!</div>;
}

export default withAuth(LoginSuccessPage);
