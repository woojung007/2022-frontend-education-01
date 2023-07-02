import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { IUseditem } from "../../../commons/types/generated/types";
import { useRecoilState } from "recoil";
import { isToday } from "../../commons/store/index";

const Today = styled.div`
  width: 200px;
  height: 500px;
  padding: 20px;
  margin: 80px 20px 80px 100px;
  border: 1px solid #f0f2ae;
  border-radius: 15px;
`;

const TodayTitle = styled.div`
  width: 100%;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 15px;
  text-align: center;
`;

const MyRow = styled.div`
  display: flex;
  cursor: pointer;
`;

const MyColumn = styled.div`
  width: 40%;
`;

export default function TodayPage() {
  const NewDate = new Date();
  const yyyy = NewDate.getFullYear();
  const mm = NewDate.getMonth() + 1;
  const dd = NewDate.getDate();
  const date = `${yyyy}-${mm}-${dd}`;
  const [isClick] = useRecoilState(isToday);
  const [basketItems, setBasketItems] = useState([]);

  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem(date) || "[]");
    setBasketItems(baskets);
  }, [isClick]);

  return (
    <Today>
      <TodayTitle>오늘 본 상품</TodayTitle>
      {basketItems.map((el: IUseditem) => (
        <MyRow key={el._id}>
          <MyColumn>{el?.name}</MyColumn>
          <MyColumn>{el?.remarks}</MyColumn>
        </MyRow>
      ))}
    </Today>
  );
}
