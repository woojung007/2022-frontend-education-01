import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import { IBoard } from "../../../src/commons/types/generated/types";

const MyRow = styled.div`
  display: flex;
`;

const MyColumn = styled.div`
  width: 25%;
`;

export default function BasketPage() {
  const [basketItems, setBasketItems] = useState([]);

  // componentDidMount - 마운트 된 이후에 마지막에 한번 실행되는 애
  // useEffect 안쓰면 -> 로컬스토리지를 못찾는다(localStorage is not defined )
  // 주소를 치고 엔터치면 프론트에 접속해서 브라우저에 그려준다
  // 자바스크립트 소스르 ㄹ실행시킨다 -> localStorage
  // 근데 브라우저에는 접속하는 프론트에서 1) 한번 그림을 그린다 - 브라우저가 아닌 환경 : 프리랜더링 - 로컬스토리지가 없다
  // localStorage is not defined - 프론트엔드 서버에서 프리랜더링할 때 나오는 것
  // useEffect 써주면 - 서버에서 실행 안되는애 브라우저에서만 실행되는애 라고 생각함
  // if(typeof window === "undefined"){} -- 프론트앤드 서버에서 실행되는 부분
  // if(typeof window !== "undefined"){} -- 브라우저에서 실행되는 부분
  // 이렇게 적어줘도 된다 하지만 너무 많은 리렌더가 발생해서 이거보다는 useEffect 사용을 한다
  // useEffect - componentDidMount

  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]"); // baskets이 없으면 어떡할래??
    // JSON.parse로 객체나 배열로 바꿔야지
    setBasketItems(baskets);
  });

  return (
    <div>
      {basketItems.map((el: IBoard) => (
        <MyRow key={el._id}>
          <MyColumn>{el.title}</MyColumn>
          <MyColumn>{el.writer}</MyColumn>
        </MyRow>
      ))}
    </div>
  );
}
