import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";

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

const MyPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
  border-right: 1px solid #f2f2f2;
  padding-top: 80px;
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding-left: 20px;
  border-top: 1px solid #ebebeb;
  border-bottom: 1px solid #ebebeb;
  font-weight: 600;
`;
const UserName = styled.div`
  padding-right: 10px;
  padding-bottom: 10px;
  height: 25px;
  font-size: 18px;
`;

const UserPoint = styled.div`
  height: 25px;
  font-size: 18px;
  color: #8c775e;
`;
const MyPageTitle = styled.div`
  width: 100%;
  text-align: center;
  font-weight: 700;
  font-size: 20px;
  line-height: 36px;
  padding-bottom: 30px;
  letter-spacing: 1.3px;
`;

const MyMenuWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  text-align: center;
`;

const ProfileImage = styled.div`
  width: 70px;
  height: 70px;
  background-color: #8c775e;
  border-radius: 50px;
  margin: 20px;
`;

const MyMenu = styled.div`
  width: 100%;
  padding-bottom: 10px;
  font-size: 16px;
  cursor: pointer;
  :hover {
    font-weight: 600;
    text-decoration: 3px underline #f0f2ae;
  }
`;

export default function MyPageSideBar() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const router = useRouter();

  const moveToPointCharge = () => {
    router.push("/user/myPage/myPoint");
  };

  const moveToMyBasket = () => {
    router.push("/user/myPage/myBasket");
  };

  const moveToMyPick = () => {
    router.push("/user/myPage/myProduct");
  };

  const moveToMyProfile = () => {
    router.push("user/myPage/myProfile");
  };

  return (
    <MyPageWrapper>
      <MyPageTitle>MY PAGE</MyPageTitle>

      <UserProfile>
        <ProfileImage></ProfileImage>
        {data?.fetchUserLoggedIn.name && (
          <UserName>{data?.fetchUserLoggedIn.name}님 </UserName>
        )}
        {!data?.fetchUserLoggedIn.name && <UserName></UserName>}

        <UserPoint>{data?.fetchUserLoggedIn.userPoint.amount} P</UserPoint>
      </UserProfile>

      <MyMenuWrapper>
        <MyMenu onClick={moveToPointCharge}>내 포인트</MyMenu>
        <MyMenu onClick={moveToMyPick}>내 장터</MyMenu>
        <MyMenu onClick={moveToMyBasket}>장바구니</MyMenu>
        <MyMenu onClick={moveToMyProfile}>내 프로필</MyMenu>
      </MyMenuWrapper>
    </MyPageWrapper>
  );
}
