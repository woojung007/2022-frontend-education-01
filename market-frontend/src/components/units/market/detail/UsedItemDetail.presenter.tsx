import * as s from "./UsedItemDetail.styles";
import { Avatar, Tooltip } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { IUsedItemDetailUI } from "./UsedItemDetail.types";
import Dompurify from "dompurify";
import MapPage from "../../../commons/map";

export default function UsedItemDetailUI(props: IUsedItemDetailUI) {
  // const text = <span> {props.data?.fetchUseditems?.boardAddress?.address}<br />
  //                   {props.data?.fetchUseditems?.boardAddress?.addressDetail}</span>;

  const onClickLink = () => {
    alert("링크입니다");
  };

  const onClickLocation = () => {
    alert("위치입니다");
  };

  return (
    <s.BodyHTML>
      <s.Container>
        <s.ContentsContainer>
          <s.Header>
            <s.InfoDiv>
              <s.AvatarWrapper>
                <Avatar
                  size="large"
                  style={{ backgroundColor: "#F0F2AE", width: "100%" }}
                  icon={<UserOutlined />}
                />
              </s.AvatarWrapper>
              <s.InfoText>
                <s.Writer>{props.data?.fetchUseditem.seller.name}</s.Writer>
                <s.Date>
                  Date : {props.data?.fetchUseditem.createdAt.slice(0, 10)}
                </s.Date>
              </s.InfoText>
            </s.InfoDiv>
            <s.HeaderTopDiv>
              <s.LinkIcon onClick={onClickLink} />

              <s.LocationDiv>
                <Tooltip placement="topRight" title="text">
                  <s.LocationIcon onClick={onClickLocation} />
                </Tooltip>
              </s.LocationDiv>
            </s.HeaderTopDiv>
          </s.Header>

          <s.Contents>
            <s.BoardDiv>
              <s.ContentsWrapper>
                <s.ContentsTop>
                  <s.BoardRemarks>
                    remarks: {props.data?.fetchUseditem.remarks}
                  </s.BoardRemarks>
                  <s.BoardTitle>{props.data?.fetchUseditem.title}</s.BoardTitle>
                  <s.BoardPrice>
                    {props.data?.fetchUseditem.price} 원
                  </s.BoardPrice>
                </s.ContentsTop>
                <s.LikeDiv>
                  <s.HeartIcon onClick={props.onClickPick}></s.HeartIcon>
                  <s.LikeNum>{props.data?.fetchUseditem.pickedCount}</s.LikeNum>
                </s.LikeDiv>
              </s.ContentsWrapper>
              <s.ImageWrapper>
                {props.data?.fetchUseditem.images
                  ?.filter((el: string) => el)
                  .map((el: string) => (
                    <s.ImageArea
                      key={el}
                      src={`https://storage.googleapis.com/${el}`}
                    />
                  ))}
              </s.ImageWrapper>

              <s.BoardContents>
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
              </s.BoardContents>

              {/* hashTag */}
              <s.TagWrapper>
                {props.data?.fetchUseditem.tags.map((el: any, idx: any) => (
                  <s.HashTag key={idx}>{el}</s.HashTag>
                ))}
              </s.TagWrapper>
            </s.BoardDiv>
            <s.MapWrapper>
              <MapPage data={props.data} />
            </s.MapWrapper>
          </s.Contents>
        </s.ContentsContainer>

        <s.ButtonContainer>
          <s.BtnDiv>
            <s.GoBtn onClick={props.moveToList}>목록으로</s.GoBtn>
            <s.GoBtn onClick={props.onClickPay}>구매하기</s.GoBtn>
            <s.GoBtn onClick={props.moveToEdit}>수정하기</s.GoBtn>
            <s.GoBtn onClick={props.onClickDelete}>삭제하기</s.GoBtn>
          </s.BtnDiv>
        </s.ButtonContainer>
      </s.Container>
    </s.BodyHTML>
  );
}
