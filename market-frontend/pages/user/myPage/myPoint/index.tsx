import { BodyHTML } from '../../../../src/components/units/market/write/UsedItemWrite.styles';
import { useState } from 'react';
import { Modal } from 'antd';
import Head from 'next/head';
import { gql, useQuery, useMutation } from '@apollo/client';



const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn{
    fetchUserLoggedIn{
      email
      name
      userPoint{
        amount
      }
    }
  }
`

const CREATE_POINT_LOADING = gql`
  mutation createPointTransactionOfLoading($impUid:ID!){
    createPointTransactionOfLoading(impUid:$impUid){
      impUid
      amount
    }
  }
`

declare const window: typeof globalThis & {
    IMP: any;
  };


export default function MyPointPage(){

  const [createPointTransactionOfLoading] = useMutation(CREATE_POINT_LOADING)
  const {data} = useQuery(FETCH_USER_LOGGED_IN)
  
    const [amount, setAmount] = useState(100);
    const onChangeValue = (event:any) => {
      setAmount(event.target.value);
      console.log("value", event.target.value);
    };
    const requestPay = () => {
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
          m_redirect_url: "http://localhost:3000/user/myPage",
        },
        (rsp: any) => {
          if (rsp.success) {
            console.log(rsp);
            createPointTransactionOfLoading({
              variables:{impUid:rsp.imp_uid},
              refetchQueries:[{
                query: FETCH_USER_LOGGED_IN
              }]
            })
          } else {
            Modal.error({content: "결제를 실패했습니다! 다시 시도해주세요."})
          }
        }
      );
    };
    return (
        <BodyHTML>
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
            <div>
                <h1>내 포인트</h1>
                <h3>{data?.fetchUserLoggedIn.userPoint.amount}POINTS</h3>
            </div>

            <div>
            <div>
        <h2>포인트 충전하기</h2>
          <p>
            <input
              type="radio"
              name="check"
              value="500"
              onChange={onChangeValue}
            />{" "}
            500 Point
        </p>
        <p>
          <input
            type="radio"
            name="check"
            value="1000"
            onChange={onChangeValue}
          />{" "}
          1000 Point
        </p>
        <p>
          <input
            type="radio"
            name="check"
            value="2000"
            onChange={onChangeValue}
          />{" "}
          2000 Point
        </p>
        <p>
          <input
            type="radio"
            name="check"
            value="5000"
            onChange={onChangeValue}
          />{" "}
          {5000} Point
        </p>
        <button onClick={requestPay}>충전하기</button>
      </div>
            </div>
            

        </BodyHTML>
    )
}


