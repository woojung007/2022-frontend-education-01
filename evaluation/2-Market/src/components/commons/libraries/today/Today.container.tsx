
import styled from "@emotion/styled";
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { isToday } from '../store/index';
import { IUseditem } from '../../../../commons/types/generated/types';

const Wrapper = styled.div`
  display: flex;
`;

const Today = styled.div`
  width: 300px;
  margin: 20px;
  padding: 20px;
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
  const [isClick,] = useRecoilState(isToday)
  const [basketItems, setBasketItems] = useState([])

  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem(date) || "[]");
    setBasketItems(baskets);
  },[isClick]);

  return (
    <Wrapper>

      <Today>
        <h1>오늘 본 상품</h1>
        {basketItems.map((el: IUseditem) => (
          <MyRow key={el._id}>
            <MyColumn>{el?.name}</MyColumn>
            <MyColumn>{el?.remarks}</MyColumn>
          </MyRow>
        ))}
      </Today>
    </Wrapper>
  );
}
