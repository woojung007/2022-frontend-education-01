import styled from "@emotion/styled";
import { useState, MouseEvent } from "react";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { isToday } from "../../../../commons/store/index";
import { getDate } from "../../../../commons/libraries/utils";

interface IPropsUsedItemPage {
  data?: any;
  el?: any;
  keyword?: string;
  idx?: any;
}

interface WordStyleProps {
  isMatched: boolean;
}

const Word = styled.span`
  color: ${(props: WordStyleProps) => (props.isMatched ? "red" : "#403F3F")};
`;

const RowWrapper = styled.div`
  width: 250px;
  margin-right: 10px;
  margin-bottom: 10px;
`;

const Row = styled.div`
  width: 100%;
  height: 300px;
  border: 1px solid #d9cdbf;
  border-radius: 20px;
  text-align: center;
  color: #fdf5ec;
  font-weight: 200;
  font-size: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover {
    background-color: #f0f2ae;
    border: 1px solid #f0f2ae;
  }
`;

const Column = styled.div`
  width: 100%;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ColumnImage = styled.div`
  width: 100px;
  padding-bottom: 15px;
`;

const BoardImage = styled.img`
  width: 100%;
`;
const ColumnSmall = styled.div`
  width: 100%;
  font-size: 12px;
  padding-bottom: 10px;
  color: #bfbfbf;
`;
const ColumnPrice = styled.div`
  width: 5vw;
  border-bottom: 2px solid #f0f2ae;
  margin-bottom: 10px;
  font-size: 14px;
`;

export default function UsedItemPage(props: IPropsUsedItemPage) {
  const router = useRouter();
  const [isSave, setIsSave] = useState(true);
  const [, setIsClick] = useRecoilState(isToday);

  const onClickMoveToDetail = (event: MouseEvent<HTMLDivElement>) => {
    router.push(`/usedItem/${(event.target as HTMLDivElement).id}`);
  };

  // 장바구니 담기
  const onClickSaveBasket = (el: any) => () => {
    console.log("el", el);
    const basket = JSON.parse(localStorage.getItem("basket") || "[]");
    const temp = basket.filter((basketEl: any) => basketEl._id === el._id);
    if (temp.length === 1) {
      Modal.error({ content: "이미 담으신 물품입니다" });
      return;
    }
    const { __typename, ...newEl } = el;
    console.log("newEl", el);
    basket.push(newEl);
    localStorage.setItem("basket", JSON.stringify(basket));
    console.log("basket", basket);
    setIsSave((prev) => !prev);
  };

  // 장바구니 담기 취소
  const onClickDeleteBasket = (el: any) => () => {
    const basket = JSON.parse(localStorage.getItem("basket") || "[]");
    const deleteBasket = basket.filter(
      (basketEl: any) => basketEl._id !== el._id
    );
    localStorage.setItem("basket", JSON.stringify(deleteBasket));
    setIsSave((prev) => !prev);
  };

  // 오늘 본 상품
  const onClickDataSaveLocal = (el: any) => () => {
    const todayBasket = JSON.parse(localStorage.getItem(getDate()) || "[]");
    const temp = todayBasket.filter(
      (todayBasketEl: any) => todayBasketEl._id === el._id
    );
    if (temp.length === 1) {
      return;
    }
    setIsClick((prev: any) => !prev);
    const { __typename, ...newEl } = el;
    todayBasket.push(newEl);
    localStorage.setItem(getDate(), JSON.stringify(todayBasket));
  };

  return (
    <RowWrapper>
      <Row key={props.idx} onClick={onClickDataSaveLocal(props.el)}>
        <ColumnImage>
          <BoardImage
            onClick={onClickMoveToDetail}
            id={props.el._id}
            src={
              props.el.images[0] || props.el.images[1]
                ? `https://storage.googleapis.com/${
                    props.el.images[0] || props.el.images[1]
                  }`
                : "/images/no-image.png"
            }
          />
        </ColumnImage>
        <Column>
          {props.el.name
            .replaceAll(props.keyword, `#$%${props.keyword}#$%`)
            .split("#$%")
            .map((el: any, idx: any) => (
              <Word key={idx} isMatched={props.keyword === el}>
                {el}
              </Word>
            ))}
        </Column>
        {/* <Column>{props.el.remarks}</Column> */}
        <ColumnSmall>seller. {props.el.seller.name}</ColumnSmall>
        <ColumnPrice>{props.el.price} P</ColumnPrice>
        <button
          onClick={
            isSave ? onClickSaveBasket(props.el) : onClickDeleteBasket(props.el)
          }
        >
          {isSave ? "basket" : "cancel"}
        </button>
      </Row>
    </RowWrapper>
  );
}
