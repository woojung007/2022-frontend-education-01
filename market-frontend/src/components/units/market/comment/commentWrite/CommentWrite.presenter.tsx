import { ICommentWritePresenter } from "./CommentWrite.types";
import * as S from "./CommentWrite.styles";
export default function CommentWritePresenter(props: ICommentWritePresenter) {
  return (
    <S.BodyHTML>
      <S.Wrapper>
        <S.CommentTop>
          <div>icon</div>
          <span>{props.isEdit ? "수정하기" : "문의하기"}</span>
        </S.CommentTop>

        <S.CommentWrapper>
          <S.CommentTextArea
            onChange={props.onChangeContents}
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시
                모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            value={props.contents || props.el?.contents || ""}
          ></S.CommentTextArea>

          <S.ButtonWrapper>
            <div>
              <span>{props.contents?.length}</span> / 100
            </div>
            <S.CommentBtn
              onClick={
                props.isEdit
                  ? props.onClickUpdateQuestion
                  : props.onClickCreateQuestion
              }
            >
              {props.isEdit ? "수정하기" : "문의하기"}
            </S.CommentBtn>
          </S.ButtonWrapper>
        </S.CommentWrapper>
      </S.Wrapper>
    </S.BodyHTML>
  );
}
