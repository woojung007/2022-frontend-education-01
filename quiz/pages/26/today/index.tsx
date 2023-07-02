import { useQuery, gql } from "@apollo/client";
import { IBoard } from "../../../src/commons/types/generated/types";
import styled from "@emotion/styled";
import { useState, useEffect } from "react";

const Wrapper = styled.div`
  display: flex;
`;

const List = styled.div`
  width: 300px;
  margin: 20px;
  padding: 20px;
  background-color: lightgray;
`;

const Today = styled.div`
  width: 300px;
  background-color: aliceblue;
  margin: 20px;
  padding: 20px;
`;

const MyRow = styled.div`
  display: flex;
  height: 40px;
  cursor: pointer;
`;

const MyColumn = styled.div`
  width: 40%;
`;

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

export default function MapBoardPage() {
  const NewDate = new Date();
  const yyyy = NewDate.getFullYear();
  const mm = NewDate.getMonth() + 1;
  const dd = NewDate.getDate();
  const date = `${yyyy}-${mm}-${dd}`;

  const { data } = useQuery(FETCH_BOARDS);
  const [basketItems, setBasketItems] = useState([]);

  const onClickDataSaveLocal = (el) => () => {
    console.log("clicked!!!");
    const todayBasket = JSON.parse(localStorage.getItem(date) || "[]");
    const temp = todayBasket.filter(
      (todayBasketEl) => todayBasketEl._id === el._id
    );

    if (temp.length === 1) {
      alert("이미 담으신 물품입니다");
      return;
    }

    const { __typename, ...newEl } = el;
    todayBasket.push(newEl);
    localStorage.setItem(date, JSON.stringify(todayBasket));
  };

  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem(date) || "[]");
    setBasketItems(baskets);
  }, []);

  return (
    <Wrapper>
      <List>
        <h1>상품 리스트</h1>
        {data?.fetchBoards.map((el: IBoard) => (
          <MyRow key={el._id} onClick={onClickDataSaveLocal(el)}>
            <MyColumn>{el.writer}</MyColumn>
            <MyColumn>{el.title}</MyColumn>
          </MyRow>
        ))}
      </List>

      <Today>
        <h1>오늘 본 상품</h1>
        {basketItems.map((el: IBoard) => (
          <MyRow key={el._id}>
            <MyColumn>{el.title}</MyColumn>
            <MyColumn>{el.writer}</MyColumn>
          </MyRow>
        ))}
      </Today>
    </Wrapper>
  );
}
