// import { getDate } from "../../../commons/libraries/utils";
import * as S from "./BestBoards.styles";
import { IBoardBestListUI } from "./BestBoards.types";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

export default function BoardBestListUI(props: IBoardBestListUI) {
  return (
    <S.BestDiv>
      <S.BestTitle>베스트 게시글</S.BestTitle>

      <S.BestBoardsWrapper>
        {props.BestBoardsData?.fetchBoardsOfTheBest.map((el: any) => (
          <S.BestBoards key={el._id}>
            <S.BestBoardPic>{el.images}</S.BestBoardPic>

            <S.BestBoardBottom>
              <S.BestBottomLeft>
                <S.BestBoardTitle>{el.title}</S.BestBoardTitle>
                <S.WriterDiv>
                  <S.BestBoardUser>
                    <Avatar
                      size="large"
                      style={{ backgroundColor: "#87d068" }}
                      icon={<UserOutlined />}
                    />
                  </S.BestBoardUser>
                  <S.BestBoardWriter>{el.writer}</S.BestBoardWriter>
                </S.WriterDiv>
                <S.BestBoardDate>
                  Date : {el.createdAt.slice(0, 10)}
                </S.BestBoardDate>
              </S.BestBottomLeft>

              <S.BestBottomRight>
                <S.Heart />
                <S.BestBoardLikeCount>{el.likeCount}</S.BestBoardLikeCount>
              </S.BestBottomRight>
            </S.BestBoardBottom>
          </S.BestBoards>
        ))}
      </S.BestBoardsWrapper>
    </S.BestDiv>
  );
}
