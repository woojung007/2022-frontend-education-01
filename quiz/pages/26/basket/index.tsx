import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import { IBoard } from "../../../../src/commons/types/generated/types";

const MyRow = styled.div`
  display: flex;
`;

const MyColumn = styled.div`
  width: 25%;
`;

export default function BasketPage() {
  const [basketItems, setBasketItems] = useState([]);

  useEffect(() => {
    const basket = JSON.parse(localStorage.getItem("basket") || "[]");
    setBasketItems(basket);
  }, []);

  return (
    <div>
      <h1>장바구니</h1>
      {basketItems.map((el: IBoard) => (
        <MyRow key={el._id}>
          <MyColumn>{el.title}</MyColumn>
          <MyColumn>{el.writer}</MyColumn>
        </MyRow>
      ))}
    </div>
  );
}
