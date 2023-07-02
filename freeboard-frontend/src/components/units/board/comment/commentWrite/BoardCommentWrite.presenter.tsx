import * as S from "./BoardCommentWrite.styles";
import { ICommentWriteUIProps } from "./BoardCommentWrite.types";
import { Rate } from "antd";

export default function CommentWriteUI(props: ICommentWriteUIProps) {
  return (
    <S.Container>
      <S.CommentDiv>
        <S.CommentWriteEdit>
          <S.CommentTitle>댓글 </S.CommentTitle>
          <S.CommentTopDiv>
            <S.CommentInput
              onChange={props.onChangeWriter}
              type="text"
              placeholder="작성자"
              defaultValue={props.el?.writer}
            />
            <S.CommentInput
              onChange={props.onChangePassword}
              type="text"
              placeholder="비밀번호"
            />
            <Rate onChange={props.handleChange} value={props.value} />
          </S.CommentTopDiv>

          <S.CommentWriteDiv>
            <S.CommentWriteTextArea
              maxLength={100}
              onChange={props.onChangeContents}
              placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보
                유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은
                게시자에게 있습니다."
              defaultValue={props.el?.contents}
            />

            <S.CommentCountDiv>
              <S.CommentCount>{props.contents.length} / 100</S.CommentCount>
              <S.CommentBtn
                onClick={
                  props.isEdit ? props.onClickUpdate : props.onClickWriteComment
                }
                isActive={props.isActive}
              >
                {props.isEdit ? "수정하기" : "등록하기"}
              </S.CommentBtn>
            </S.CommentCountDiv>
          </S.CommentWriteDiv>
        </S.CommentWriteEdit>
      </S.CommentDiv>
    </S.Container>
  );
}
