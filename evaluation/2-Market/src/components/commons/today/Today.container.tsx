import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { IUseditem } from "../../../commons/types/generated/types";
import { useRecoilState } from "recoil";
import { isToday } from "../store/index";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  display: flex;
  z-index: 100;
  flex-direction: column;
  width: 155px;
  height: 400px;
  overflow: hidden;
  background-color: #fff;
  border: 1px solid #000000;
  padding: 30px;
  margin: 80px 60px 0 80px;
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 22px;
`;

const Today = styled.div`
  width: 300px;
`;

const MyRow = styled.div`
  cursor: pointer;
`;

const MyImages = styled.img`
  width: 85px;
  height: 85px;
  background-color: #c4c4c4;
  margin-bottom: 10px;
`;

export default function TodayPage() {
  const router = useRouter();

  const NewDate = new Date();
  const yyyy = NewDate.getFullYear();
  const mm = NewDate.getMonth() + 1;
  const dd = NewDate.getDate();
  const date = `${yyyy}-${mm}-${dd}`;
  const [isClick] = useRecoilState(isToday);
  const [basketItems, setBasketItems] = useState([]);

  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem(date) || "[]");
    setBasketItems(baskets.splice(baskets.length - 3, 3));
  }, [isClick]);

  const moveToDetail = (event: any) => {
    router.push(`/market/${event.target.id}`);
  };
  return (
    <Wrapper>
      <Today>
        <Title>지금 본 상품</Title>
        {basketItems?.map((el: IUseditem) => (
          <MyRow key={el._id}>
            <MyImages
              id={el._id}
              onClick={moveToDetail}
              src={
                el?.images?.[0] || el?.images?.[1]
                  ? `https://storage.googleapis.com/${el.images[0]}`
                  : "/no-image.png"
              }
            />
          </MyRow>
        ))}
      </Today>
    </Wrapper>
  );
}
