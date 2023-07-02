import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { gql, useQuery } from "@apollo/client";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      userPoint {
        amount
      }
    }
  }
`;

const Wrapper = styled.div`
  height: 70px;
  background-color: #8c775e;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 6%;
  margin: 0;
`;

const Logo = styled.div`
  width: 400px;
  color: #f2d6bd;
  text-align: center;
  font-size: 34px;
  margin-left: 40px;
  cursor: pointer;
`;

const UserInfoWrapper = styled.div`
  display: flex;
  letter-spacing: 1.4px;
  padding-top: 10px;
`;
const UserInfo = styled.div`
  display: flex;
  color: #fdf5ec;
  height: 80%;
  font-weight: 600;
  background-color: none;
  margin-right: 20px;
  cursor: pointer;
  :hover {
    font-weight: bold;
    color: #f0f2ae;
  }
`;

const User = styled.div`
  color: #fdf5ec;
  padding-right: 15px;
  cursor: pointer;
  :hover {
    color: #f0f2ae;
  }
`;
const UserPoint = styled.div`
  color: #f0f2ae;
`;
const Login = styled.div`
  color: #fdf5ec;
  font-weight: 600;
  background-color: none;
  width: 80px;
  height: 80%;
  text-align: center;
  margin-right: 20px;
  cursor: pointer;
  :hover {
    font-weight: bold;
    color: #f0f2ae;
  }
`;

const SignUp = styled.div`
  color: #fdf5ec;
  width: 80px;
  font-weight: 600;
  background-color: none;
  height: 80%;
  text-align: center;
  cursor: pointer;
  :hover {
    font-weight: bold;
    color: #f0f2ae;
  }
`;

export default function LayoutHeader() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  const router = useRouter();

  const moveToHome = () => {
    router.push("/");
  };
  const moveToMyPage = () => {
    router.push("/user/myPage");
  };

  const moveToLogIn = () => {
    router.push("/user/login");
  };

  const moveToSignUp = () => {
    router.push("/user/signup");
  };

  return (
    <Wrapper>
      <Logo onClick={moveToHome}>eeeeve Market</Logo>
      <UserInfoWrapper>
        <UserInfo onClick={moveToMyPage}>
          {data?.fetchUserLoggedIn.name && (
            <User>{data?.fetchUserLoggedIn.name}님 환영합니다</User>
          )}
          {!data?.fetchUserLoggedIn.name && <div></div>}
          <UserPoint>
            {data?.fetchUserLoggedIn.userPoint.amount} P
            {!data?.fetchUserLoggedIn.userPoint && <div></div>}
          </UserPoint>
        </UserInfo>
        <Login onClick={moveToLogIn}>Login</Login>
        <SignUp onClick={moveToSignUp}>SignUp</SignUp>
      </UserInfoWrapper>
    </Wrapper>
  );
}
