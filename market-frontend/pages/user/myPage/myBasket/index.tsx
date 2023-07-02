import styled from "@emotion/styled";
import { IUseditem } from "../../../../src/commons/types/generated/types";
import { useState, useEffect, MouseEvent } from "react";
import { useQuery, gql, useMutation } from "@apollo/client";
import { FETCH_USER_LOGGED_IN } from "../../../../src/components/units/login/login.queries";

const CREATE_POINT_TO_BUYING = gql`
  mutation createPointTransactionOfBuyingAndSelling($useritemId: ID!) {
    createPointTransactionOfBuyingAndSelling(useritemId: $useritemId) {
      _id
    }
  }
`;

const BodyHTML = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 13%;
`;
const BasketItems = styled.div`
  display: flex;
  flex-direction: column;
`;
const Row = styled.div`
  width: 80%;
  display: flex;
  border-bottom: 1px solid #333;
  padding: 2% 0;
  margin-bottom: 2%;
`;

const Column = styled.div`
  width: 50%;
`;

const BasketTitle = styled.h1``;

export default function MyBasketPage() {
  const [basketItems, setBasketItems] = useState([]);

  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const [createPointTransactionOfBuyingAndSelling] = useMutation(
    CREATE_POINT_TO_BUYING
  );

  useEffect(() => {
    const basket = JSON.parse(localStorage.getItem("basket") || "[]");
    setBasketItems(basket);
  }, []);

  const onClickPay = async (event: MouseEvent<HTMLButtonElement>) => {
    try {
      await createPointTransactionOfBuyingAndSelling({
        variables: {
          useritemId: (event.target as HTMLButtonElement).id,
        },
        // refetchQueries:[{
        //     query:FETCH_USER_LOGGED_IN,
        // }]
      });
    } catch (error: any) {}
  };
  return (
    <BodyHTML>
      <BasketTitle>{data?.fetchUserLoggedIn.name}님의 장바구니</BasketTitle>
      <div>
        <span>{data?.fetchUserLoggedIn.name}님의 포인트</span> :
        <span>{data?.fetchUserLoggedIn.userPoint.amount}POINTS</span>
      </div>
      <BasketItems>
        {basketItems.map((el: IUseditem) => (
          <Row key={el._id}>
            <input type="checkbox" style={{ width: 80, height: 20 }} />
            <Column>판매상품 : {el.name}</Column>
            <Column>한줄 요약 : {el.remarks}</Column>
            <Column>가격 : {el.price}P</Column>
            <button onClick={onClickPay} id={el._id}>
              결제하기
            </button>
          </Row>
        ))}
      </BasketItems>
      <div></div>
    </BodyHTML>
  );
}
