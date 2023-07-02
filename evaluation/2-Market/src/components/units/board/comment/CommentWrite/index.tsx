import * as S from "../../detail/UseditemDetail.styles";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_USED_ITEM_QUESTIONS } from "../commentList/CommentList.queries";
import { Modal } from "antd";
import {
  CREATE_USED_ITEM_QUESTION,
  UPDATE_USED_ITEM_QUESTION,
} from "./CommentWrite.queries";

export default function CommentWritePage(props: any) {
  const [contents, setContents] = useState("");
  const [createUseditemQuestion] = useMutation(CREATE_USED_ITEM_QUESTION);
  const [updateUseditemQuestion] = useMutation(UPDATE_USED_ITEM_QUESTION);

  const router = useRouter();

  const onChangeContents = (event: any) => {
    setContents(event.target.value);
  };

  const onClickCreateQuestion = async () => {
    try {
      const result = await createUseditemQuestion({
        variables: {
          createUseditemQuestionInput: {
            contents,
          },
          useditemId: String(router.query.useditemId),
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { useditemId: router.query.useditemId },
          },
        ],
      });
      setContents("");
      console.log(result);
      Modal.success({ content: "댓글을 성공적으로 등록하였습니다!" });
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  const onClickUpdateQuestion = async () => {
    try {
      await updateUseditemQuestion({
        variables: {
          updateUseditemQuestionInput: {
            contents,
          },
          useditemQuestionId: props.el._id,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { useditemQuestionId: props.el._id },
          },
        ],
      });
      props.setIsEdit(false);
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };
  return (
    <S.CommentWrapper>
      <S.CommentTextArea
        onChange={onChangeContents}
        defaultValue={props.el?.contents}
      ></S.CommentTextArea>
      <S.WriteBtn
        onClick={props.isEdit ? onClickUpdateQuestion : onClickCreateQuestion}
      >
        {props.isEdit ? "수정하기" : "작성하기"}
      </S.WriteBtn>
    </S.CommentWrapper>
  );
}
