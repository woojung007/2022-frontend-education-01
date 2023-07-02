import * as S from "./UseditemDetail.styles";
import MapPage from "../../../commons/libraries/map/index";
import CommentItemPage from "../comment/commentList/index";
import CommentWritePage from "../comment/CommentWrite";
import { FETCH_USED_ITEM_QUESTIONS } from "../comment/CommentWrite/CommentWrite.queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import Dompurify from "dompurify";

export default function UseditemDetailPresenter(props: any) {
  const router = useRouter();

  const { data } = useQuery(FETCH_USED_ITEM_QUESTIONS, {
    variables: { useditemId: String(router.query.useditemId) },
  });

  return (
    <S.Wrapper>
      <S.DetailTop>
        <S.ImageDiv>
          <img
            src={
              props.data?.fetchUseditem.images[0]
                ? `https://storage.googleapis.com/${props.data?.fetchUseditem.images[0]}`
                : "../no-image.png"
            }
            style={{ width: "480px", height: "auto" }}
          />
        </S.ImageDiv>
        <S.TopRight>
          <S.TopRightTop>
            <S.RightTopTop>
              <S.NameSpan>{props.data?.fetchUseditem.name}</S.NameSpan>
              <div>
                <S.EditBtn onClick={props.moveToEdit}>ed</S.EditBtn>
                <S.DeleteBtn onClick={props.onClickDelete}>x</S.DeleteBtn>
              </div>
            </S.RightTopTop>
            <div>
              <S.PriceSpan>{props.data?.fetchUseditem.price}</S.PriceSpan>
              <S.Won>원</S.Won>
            </div>
          </S.TopRightTop>
          <S.TopRightMid>
            <S.RemarkDiv>{props.data?.fetchUseditem.remarks}</S.RemarkDiv>

            <S.HashDiv>
              {props.data?.fetchUseditem.tags.map((el: any, idx: any) => (
                <>
                  <S.HashSpan key={idx}>{el}</S.HashSpan>
                </>
              ))}
            </S.HashDiv>
          </S.TopRightMid>
          <S.ButtonWrapper>
            <S.PickButton onClick={props.onClickPick}>
              찜&nbsp;
              {props.data?.fetchUseditem.pickedCount}
            </S.PickButton>
            <S.BasketButton onClick={props.onClickBasket}>
              장바구니
            </S.BasketButton>
            <S.BuyButton onClick={props.onClickPay}>바로구매 </S.BuyButton>
          </S.ButtonWrapper>
        </S.TopRight>
      </S.DetailTop>

      <S.DetailBottom>
        <S.BottomLeft>
          <S.BorderBottom>
            <h1>상품정보</h1>
          </S.BorderBottom>
          <S.BoardContents>
            {typeof window !== "undefined" ? (
              <div
                dangerouslySetInnerHTML={{
                  __html: Dompurify.sanitize(
                    props.data?.fetchUseditem.contents
                  ),
                }}
              ></div>
            ) : (
              <div></div>
            )}
          </S.BoardContents>
          <div>
            <S.MapTitleWrapper>
              {/* <div>icon</div> */}
              <h1>거래지역</h1>
            </S.MapTitleWrapper>
            <S.MapDiv>
              <MapPage isEdit={false} data={props.data} />
            </S.MapDiv>
          </div>
        </S.BottomLeft>

        <S.BottomRight>
          <S.BorderBottom>
            <h1>상점정보</h1>
          </S.BorderBottom>
          <S.UserDiv>
            <S.Profile></S.Profile>
            <S.UserName>{props.data?.fetchUseditem.seller.name}</S.UserName>
          </S.UserDiv>
          <div>
            <S.BorderBottom>
              <h1>댓글</h1>
            </S.BorderBottom>
            <div>
              <CommentWritePage isEdit={false} />
            </div>

            <S.CommentListWrapper>
              {data?.fetchUseditemQuestions?.map((el: any) => (
                <CommentItemPage el={el} key={el._id} />
              ))}
            </S.CommentListWrapper>
          </div>
        </S.BottomRight>
      </S.DetailBottom>
    </S.Wrapper>
  );
}
