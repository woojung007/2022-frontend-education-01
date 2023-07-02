import * as S from "./CommentList.styles";
import { ICommentItemPage } from "./CommentList.types";
import CommentWrite from "../commentWrite/CommentWrite.container";
import { useState, MouseEvent } from "react";
import { useMutation } from "@apollo/client";
import {
  FETCH_USED_ITEM_QUESTIONS,
  DELETE_USED_ITEM_QUESTION,
} from "./CommentList.queries";
import { useRouter } from "next/router";
import { Modal } from "antd";
import ReplyWrite from "../replyItem/replyWrite/ReplyWrite.container";
import ReplyList from "../replyItem/replyList/ReplyList.container";

export default function CommentItemPage(props: ICommentItemPage) {
  const [isEdit, setIsEdit] = useState(false);
  const [isReply, setIsReply] = useState(false);

  const router = useRouter();
  const [deleteUseditemQuestion] = useMutation(DELETE_USED_ITEM_QUESTION);

  const onClickEdit = () => {
    setIsEdit(true);
  };

  const onClickDeleteQuestion = async (
    event: MouseEvent<HTMLButtonElement>
  ) => {
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

  const onClickWriteReply = () => {
    setIsReply(true);
  };
  return (
    <div>
      {isEdit === false && (
        <S.CommentListWrapper key={props.el._id}>
          <S.CommentListInner>
            <S.Profile>profile</S.Profile>
            <S.CommentContents>
              <div>{props.el.user}</div>
              <div>{props.el.contents}</div>
              <div>{props.el.createdAt.slice(0, 10)}</div>
            </S.CommentContents>
            <S.ButtonWrapper>
              <S.Button onClick={onClickEdit}>ed</S.Button>
              <S.Button onClick={onClickDeleteQuestion} id={props.el._id}>
                x
              </S.Button>
              <S.Button onClick={onClickWriteReply} id={props.el._id}>
                RP
              </S.Button>
            </S.ButtonWrapper>
          </S.CommentListInner>
          <S.ReplyWrapper>
            {isReply === true && (
              <ReplyWrite
                isReply={true}
                el={props.el}
                setIsReply={setIsReply}
              />
            )}
            <ReplyList el={props.el} />
          </S.ReplyWrapper>
        </S.CommentListWrapper>
      )}
      {isEdit === true && (
        <CommentWrite isEdit={true} setIsEdit={setIsEdit} el={props.el} />
      )}
    </div>
  );
}
