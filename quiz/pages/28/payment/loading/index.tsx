import { useQuery, gql } from "@apollo/client";
import { withAuth } from "../../../../src/components/commons/hocs/withAuth";
import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

function PointChargePage() {
  const [amount, setAmount] = useState(100);
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const router = useRouter();

  const onChangeValue = (event) => {
    setAmount(event.target.value);
    console.log("value", event.target.value);
  };
  const requestCharge = () => {
    const IMP = window.IMP;
    IMP.init("imp49910675");
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011",   // 주석 해놓으면 랜덤으로 생성
        name: "포인트",
        amount: amount,
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: "http://localhost:3000/28-01-payment",
      },
      (rsp: any) => {
        // callback
        if (rsp.success) {
          console.log(rsp);
          router.push("/quiz-28/payment/complete");
        } else {
          alert("결제에 실패했습니다! 다시 시도해 주세요.");
        }
      }
    );
  };

  return (
    <div>
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
      <div>{data?.fetchUserLoggedIn.name}님 환영합니다!!!</div>
      <div>
        <p>
          <input
            type="radio"
            name="check"
            value="500"
            onChange={onChangeValue}
          />{" "}
          500원
        </p>
        <p>
          <input
            type="radio"
            name="check"
            value="1000"
            onChange={onChangeValue}
          />{" "}
          1000원
        </p>
        <p>
          <input
            type="radio"
            name="check"
            value="2000"
            onChange={onChangeValue}
          />{" "}
          2000원
        </p>
        <p>
          <input
            type="radio"
            name="check"
            value="5000"
            onChange={onChangeValue}
          />{" "}
          5000원
        </p>
        <button onClick={requestCharge}>충전하기</button>
      </div>
    </div>
  );
}

export default withAuth(PointChargePage);
