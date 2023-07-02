import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  height: 70px;
  background-color: rgba(0, 0, 0);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 6%;
  margin: 0;
`;

const Login = styled.div`
  color: #fff;
  width: 80px;
  height: 30px;
  text-align: center;
  border-radius: 5px;
  padding-top: 10px;
  margin-right: 20px;
  cursor: pointer;
  :hover {
    font-weight: bold;
    color: crimson;
  }
`;

const SignUp = styled.div`
  color: #fff;
  width: 80px;
  height: 30px;
  text-align: center;
  border-radius: 5px;
  padding-top: 10px;
  cursor: pointer;
  :hover {
    font-weight: bold;
    color: crimson;
  }
`;

export default function LayoutHeader() {
  const router = useRouter();

  const moveToLogin = () => {
    router.push("/user/login");
  };

  const moveToSignUp = () => {
    router.push("/user/signup");
  };

  return (
    <Wrapper>
      <Login onClick={moveToLogin}>Login</Login>

      <SignUp onClick={moveToSignUp}>SignUp</SignUp>
    </Wrapper>
  );
}
