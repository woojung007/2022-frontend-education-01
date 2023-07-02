import * as S from "../../detail/UseditemDetail.styles";
import { Modal } from "antd";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { DELETE_USED_ITEM_QUESTION } from "./CommentList.queries";
import CommentWritePage from "../CommentWrite/index";
import { FETCH_USED_ITEM_QUESTIONS } from "../CommentWrite/CommentWrite.queries";
import styled from "@emotion/styled";

interface ICommentItemPage {
  el?: any;
}
const CommentListWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function CommentItemPage(props: ICommentItemPage) {
  const [isEdit, setIsEdit] = useState(false);
  console.log(props.el);
  const router = useRouter();
  const [deleteUseditemQuestion] = useMutation(DELETE_USED_ITEM_QUESTION);

  const onClickEdit = () => {
    setIsEdit(true);
  };

  const onClickDeleteQuestion = async (event: any) => {
    try {
      await deleteUseditemQuestion({
        variables: {
          useditemQuestionId: (event.target as HTMLButtonElement).id,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { useditemId: String(router.query.useditemId) },
          },
        ],
      });
      Modal.success({ content: "댓글을 삭제했습니다!" });
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <CommentListWrapper>
      {isEdit === false && (
        <div key={props.el._id}>
          <S.WriterProfile>
            <S.SmallProfile></S.SmallProfile>
            <S.CommentUserDiv>
              <S.CommentUserName>{props.el.user.name}</S.CommentUserName>
              <div>{props.el.createdAt.slice(0, 10)}</div>
            </S.CommentUserDiv>
            <S.CommentBtnWrapper>
              <button onClick={onClickEdit}>ed</button>
              <button onClick={onClickDeleteQuestion} id={props.el._id}>
                x
              </button>
            </S.CommentBtnWrapper>
          </S.WriterProfile>
          <S.CommentDiv>{props.el.contents}</S.CommentDiv>
        </div>
      )}
      {isEdit === true && (
        <CommentWritePage isEdit={true} setIsEdit={setIsEdit} el={props.el} />
      )}
    </CommentListWrapper>
  );
}
