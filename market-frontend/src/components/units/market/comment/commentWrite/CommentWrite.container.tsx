import CommentWritePresenter from "./CommentWrite.presenter";
import { useMutation } from "@apollo/client";
import {
  CREATE_USED_ITEM_QUESTION,
  FETCH_USED_ITEM_QUESTIONS,
  UPDATE_USED_ITEM_QUESTION,
} from "./CommentWrite.queries";
import { useState, ChangeEvent } from "react";
import { useRouter } from "next/router";
import { Modal } from "antd";
import { ICommentWrite } from "./CommentWrite.types";

export default function CommentWrite(props: ICommentWrite) {
  const router = useRouter();
  const [contents, setContents] = useState("");
  const [createUseditemQuestion] = useMutation(CREATE_USED_ITEM_QUESTION);
  const [updateUseditemQuestion] = useMutation(UPDATE_USED_ITEM_QUESTION);

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
  };

  const onClickCreateQuestion = async () => {
    try {
      await createUseditemQuestion({
        variables: {
          createUseditemQuestionInput: {
            contents,
          },
          useditemId: router.query.useditemId,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { useditemId: router.query.useditemId },
          },
        ],
      });
      setContents("");
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
          useditemQuestionId: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { useditemQuestionId: props.el?._id },
          },
        ],
      });
      setContents("");
      props.setIsEdit(false);
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <CommentWritePresenter
      onChangeContents={onChangeContents}
      onClickCreateQuestion={onClickCreateQuestion}
      onClickUpdateQuestion={onClickUpdateQuestion}
      isEdit={props.isEdit}
      data={props.data}
      el={props.el}
      contents={contents}
    />
  );
}
