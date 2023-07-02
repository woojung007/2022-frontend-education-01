import styled from "@emotion/styled";
import { useState } from "react";

interface IBoardItemPage {
  el?: any;
  data?: any;
}

const MyRow = styled.div`
  display: flex;
`;

const MyColumn = styled.div`
  width: 25%;
`;

export default function BoardItemPage(props: IBoardItemPage) {
  const [isSave, setIsSave] = useState(true);

  const onClickSaveBoard = (el: any) => () => {
    console.log(el);
    const basket = JSON.parse(localStorage.getItem("basket") || "[]");
    const temp = basket.filter((basketEl: any) => basketEl._id === el._id);
    console.log("temp", temp);

    if (temp.length === 1) {
      alert("이미 담으신 물품입니다");
      return;
    }
    const { __typename, ...newEl } = el;
    basket.push(newEl);
    localStorage.setItem("basket", JSON.stringify(basket));
    setIsSave((prev) => !prev);
  };

  const onClickDeleteBoard = (el: any) => () => {
    const basket = JSON.parse(localStorage.getItem("basket") || "[]");
    const deleteBasket = basket.filter(
      (basketEl: any) => basketEl._id !== el._id
    );

    localStorage.setItem("basket", JSON.stringify(deleteBasket));
    setIsSave((prev) => !prev);
  };

  return (
    <div>
      <MyRow key={props.el._id}>
        <MyColumn>{props.el.writer}</MyColumn>
        <MyColumn>{props.el.title}</MyColumn>
        <button
          onClick={
            isSave ? onClickSaveBoard(props.el) : onClickDeleteBoard(props.el)
          }
        >
          {" "}
          {isSave ? "게시물 담기" : "담기 취소"}{" "}
        </button>
      </MyRow>
    </div>
  );
}
