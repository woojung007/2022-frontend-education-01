import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { gql, useQuery, useMutation } from "@apollo/client";
import { useRecoilState } from "recoil";
import { basketItemsState } from "../../../store/index";
import { useEffect, useState } from "react";
import Modal from "antd/lib/modal/Modal";
import Head from "next/head";
import { DollarCircleOutlined } from "@ant-design/icons";

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
  background-color: #fff;
  display: flex;
  flex-direction: column;
`;
const UserInfo = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-bottom: 1px solid #555;
  padding-right: 100px;
  padding-top: 30px;
  cursor: pointer;
`;

const LogoWrapper = styled.div`
  width: 100%;
  height: 160px;
  border-bottom: 1px solid #555;
  display: flex;
  justify-content: space-between;
  padding: 0 100px;
  align-items: center;
`;
const UserWrapper = styled.div`
  display: flex;
`;
const User = styled.span`
  width: 100px;
  padding-right: 15px;
  text-align: center;
  font-size: 14px;
  :hover {
    font-weight: bold;
  }
`;
const UserSmall = styled.div`
  width: 60px;
  text-align: center;
  font-size: 14px;
  :hover {
    font-weight: bold;
  }
`;

const Logo = styled.div`
  width: 300px;
  cursor: pointer;
`;

const SellWrapper = styled.div`
  width: 130px;
  height: 50px;
  display: flex;
  padding-top: 15px;
  cursor: pointer;
`;

const SellIcon = styled(DollarCircleOutlined)`
  padding-right: 10px;
  font-size: 20px;
`;

const SellDiv = styled.div`
  font-weight: 500;
  font-size: 24px;
  line-height: 100%;
`;

// charge modal

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 40px 0 40px;
`;

const ModalTop = styled.div``;

const ModalClose = styled.button`
  width: 100%;
  text-align: right;
  border: none;
  background-color: #fff;
  font-size: 18px;
  font-weight: bold;
`;
const ModalTitle = styled.div`
  width: 100%;
  height: 30%;
  padding-top: 10px;
  margin-bottom: 50px;
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
  text-align: center;
`;

const PointPick = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #828282;
  border-bottom: 2px solid #000;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 17px;
`;

const PointMore = styled.div`
  font-weight: 700;
  color: #000;
`;

const PointWrapper = styled.div`
  width: 100%;
  border: 1px solid #c4c4c4;
  border-radius: 10px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  align-items: center;
  color: #e0e0e0;
  margin-bottom: 40px;
`;

const PointInput = styled.input`
  width: 100%;
  height: 52px;
  border: 0;
  border-bottom: 1px solid #ebebeb;
  cursor: pointer;
  :hover {
    font-weight: 700;
    color: #000;
  }
  padding-left: 20px;
  padding-top: 15px;
`;
const PointDivNoBorder = styled.input`
  width: 100%;
  height: 52px;
  cursor: pointer;
  :hover {
    font-weight: 700;
    color: #000;
  }
  padding-left: 20px;
  padding-top: 15px;
  border: none;
`;

const ChargeBtn = styled.button`
  width: 100%;
  height: 51px;
  align-items: center;
  padding: 14px 16px;
  border-radius: 10px;
  color: #fff;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  text-align: center;
  background-color: #bdbdbd;
  border: none;
`;
const CREATE_POINT_LOADING = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      impUid
      amount
    }
  }
`;

declare const window: typeof globalThis & {
  IMP: any;
};

export default function LayoutHeader() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const [isOpen, setIsOpen] = useState(false);
  const [isShowPoint, setIsShowPoint] = useState(false);
  const [basketItems, setBasketItems] = useRecoilState(basketItemsState);
  const [createPointTransactionOfLoading] = useMutation(CREATE_POINT_LOADING);
  const [isActive, setIsActive] = useState(false);

  const [amount, setAmount] = useState();

  const onChangeValue = (event: any) => {
    setAmount(event.target.value);
    console.log("value", event.target.value);
  };

  const moveToLogIn = () => {
    router.push("/market/user/login");
  };

  const moveToSignUp = () => {
    router.push("/market/user/signUp");
  };

  useEffect(() => {
    const basket = JSON.parse(localStorage.getItem("basket") || "[]");
    setBasketItems(basket);
  }, []);

  const moveToHome = () => {
    router.push("/");
  };

  const moveToWrite = () => {
    router.push("/market/new");
  };

  // 충전하기 모달창
  const showModal = () => {
    setIsOpen(true);
  };

  const handleOk = () => {
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  const showPoint = () => {
    setIsShowPoint((prev) => !prev);
  };

  const onClickPoint = (event: any) => {
    setAmount(event.target.value);
    setIsShowPoint(false);
    setIsActive(true);
  };

  const requestPay = () => {
    handleCancel();
    const IMP = window.IMP;
    IMP.init("imp49910675");
    IMP.request_pay(
      {
        pg: "html5_inicis",
        pay_method: "card",
        name: `포인트 ${amount}점`,
        amount: amount,
        buyer_email: data?.fetchUserLoggedIn.email,
        buyer_name: data?.fetchUserLoggedIn.name,
        m_redirect_url: "http://localhost:3000/",
      },
      (rsp: any) => {
        if (rsp.success) {
          console.log(rsp);
          createPointTransactionOfLoading({
            variables: { impUid: rsp.imp_uid },
            refetchQueries: [
              {
                query: FETCH_USER_LOGGED_IN,
              },
            ],
          });
        } else {
          alert("결제를 실패했습니다! 다시 시도해주세요.");
        }
      }
    );
  };

  return (
    <Wrapper>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <UserInfo>
        {data?.fetchUserLoggedIn.name && (
          <UserWrapper>
            <User>{data?.fetchUserLoggedIn.name}님&nbsp;</User>
            <User>포인트 {data?.fetchUserLoggedIn.userPoint.amount} P</User>
            <UserSmall onClick={showModal}>충전</UserSmall>
            <UserSmall>로그아웃</UserSmall>
            <User>
              장바구니
              <span>{basketItems.length}</span>
            </User>
          </UserWrapper>
        )}
        {!data?.fetchUserLoggedIn.name && (
          <UserWrapper>
            <User onClick={moveToLogIn}>로그인</User>
            <User onClick={moveToSignUp}>회원가입</User>
            <User>
              장바구니
              <span>{basketItems.length}</span>
            </User>
          </UserWrapper>
        )}

        {isOpen && (
          <Modal
            visible={true}
            centered
            width={464}
            onOk={handleOk}
            onCancel={handleCancel}
            closeIcon
            cancelButtonProps={{ style: { display: "none" } }}
            okButtonProps={{ style: { display: "none" } }}
            style={{
              width: "auto",
              height: "auto",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
              margin: 0,
            }}
            maskStyle={{
              width: "100%",
              height: "100%",
              background: "#000",
              opacity: 0.3,
            }}
            footer={null}
            zIndex={1}
          >
            <ModalWrapper>
              <ModalTop>
                <ModalClose onClick={handleCancel}>x</ModalClose>
                <ModalTitle>충전하실 금액을 선택해주세요!</ModalTitle>
                <PointPick onClick={showPoint}>
                  <div>{amount ? amount : "포인트 선택"}</div>
                  <PointMore>V</PointMore>
                </PointPick>
              </ModalTop>
              {isShowPoint && (
                <PointWrapper>
                  <PointInput
                    onClick={onClickPoint}
                    readOnly
                    value="100"
                    onChange={onChangeValue}
                    placeholder="100"
                  />
                  <PointInput
                    onClick={onClickPoint}
                    readOnly
                    value="500"
                    onChange={onChangeValue}
                    placeholder="500"
                  />
                  <PointInput
                    onClick={onClickPoint}
                    readOnly
                    value="2000"
                    onChange={onChangeValue}
                    placeholder="2,000"
                  />
                  <PointDivNoBorder
                    onClick={onClickPoint}
                    readOnly
                    value="5000"
                    onChange={onChangeValue}
                    placeholder="5,000"
                  />
                </PointWrapper>
              )}

              {isActive ? (
                <ChargeBtn onClick={requestPay} style={{ background: "#000" }}>
                  충전하기
                </ChargeBtn>
              ) : (
                <ChargeBtn onClick={requestPay}>충전하기</ChargeBtn>
              )}
            </ModalWrapper>
          </Modal>
        )}
      </UserInfo>

      <LogoWrapper>
        <Logo onClick={moveToHome}>
          <img src="/logo-black.png" style={{ width: 300 }} />
        </Logo>

        <SellWrapper onClick={moveToWrite}>
          <SellIcon></SellIcon>
          <SellDiv>판매하기</SellDiv>
        </SellWrapper>
      </LogoWrapper>
    </Wrapper>
  );
}
