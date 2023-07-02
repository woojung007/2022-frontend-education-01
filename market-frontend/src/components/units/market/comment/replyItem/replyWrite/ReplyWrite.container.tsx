import { useMutation } from "@apollo/client";
import { useState, ChangeEvent } from "react";
import { Modal } from "antd";
import {
  CREATE_USED_ITEM_QUESTION_ANSWER,
  FETCH_USED_ITEM_QUESTION_ANSWERS,
  UPDATE_USED_ITEM_QUESTION_ANSWER,
} from "./ReplyWrite.queries";

import { IReplyWrite } from "./ReplyWrite.types";
import ReplyWritePresenter from "./ReplyWrite.presenter";

export default function ReplyWrite(props: IReplyWrite) {
  const [contents, setContents] = useState("");
  const [createUseditemQuestionAnswer] = useMutation(
    CREATE_USED_ITEM_QUESTION_ANSWER
  );
  const [updateUseditemQuestionAnswer] = useMutation(
    UPDATE_USED_ITEM_QUESTION_ANSWER
  );

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
  };

  const onClickCreateAnswer = async () => {
    try {
      const result = await createUseditemQuestionAnswer({
        variables: {
          createUseditemQuestionAnswerInput: {
            contents,
          },
          useditemQuestionId: props.el._id,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTION_ANSWERS,
            variables: { useditemQuestionId: props.el._id },
          },
        ],
      });
      setContents("");
      props.setIsReply(false);
      console.log(result);
      Modal.success({ content: "댓글을 성공적으로 등록하였습니다!" });
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  const onClickUpdateAnswer = async () => {
    try {
      const result1 = await updateUseditemQuestionAnswer({
        variables: {
          updateUseditemQuestionAnswerInput: {
            contents,
          },
          useditemQuestionAnswerId: props.el._id,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTION_ANSWERS,
            variables: { useditemQuestionId: props.el._id },
          },
        ],
      });
      setContents("");
      console.log(result1);
      Modal.success({ content: "댓글 수정이 완료되었습니다" });
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <ReplyWritePresenter
      onChangeContents={onChangeContents}
      onClickCreateAnswer={onClickCreateAnswer}
      onClickUpdateAnswer={onClickUpdateAnswer}
      replyEl={props.el}
      isReply={true}
      contents={contents}
    />
  );
}
