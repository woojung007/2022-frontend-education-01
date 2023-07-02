import { useState, MouseEvent } from "react";
import { IReplyListItemPage } from "./ReplyList.types";
import ReplyWrite from "../replyWrite/ReplyWrite.container";
import styled from "@emotion/styled";
import { Modal } from "antd";
import { useMutation } from "@apollo/client";
import {
  FETCH_USED_ITEM_QUESTION_ANSWERS,
  DELETE_USED_ITEM_ANSWER,
} from "./ReplyList.queries";

const ReplyListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  color: #111;
  padding-top: 20px;
  padding-bottom: 30px;
`;
const ReplyListInner = styled.div`
  display: flex;
`;

const Profile = styled.div`
  width: 40px;
  height: 45px;
  border: 1px solid #333;
  margin-top: 20px;
`;

const ReplyContents = styled.div`
  width: 88%;
  padding: 20px;
  font-size: 16px;
`;

const ButtonWrapper = styled.div`
  display: flex;
`;
const Button = styled.button`
  width: 25px;
  height: 25px;
  margin: 8px;
`;
export default function ReplyListItemPage(props: IReplyListItemPage) {
  const [isReply, setIsReply] = useState(false);
  const [deleteUseditemQuestionAnswer] = useMutation(DELETE_USED_ITEM_ANSWER);

  const onClickDeleteAnswer = async (event: MouseEvent<HTMLButtonElement>) => {
    try {
      await deleteUseditemQuestionAnswer({
        variables: {
          useditemQuestionAnswerId: (event.target as HTMLButtonElement).id,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTION_ANSWERS,
            variables: { useditemQuestionId: props.el?._id },
          },
        ],
      });
      Modal.success({ content: "댓글을 삭제했습니다!" });
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  const onClickEdit = () => {
    setIsReply(true);
  };

  return (
    <div>
      {isReply === false && (
        <ReplyListWrapper key={props.replyEl._id}>
          <ReplyListInner>
            <Profile>profile</Profile>
            <ReplyContents>
              <div>{props.replyEl.user}</div>
              <div>{props.replyEl.contents}</div>
              <div>{props.replyEl.createdAt.slice(0, 10)}</div>
            </ReplyContents>
            <ButtonWrapper>
              <Button onClick={onClickEdit}>ed</Button>
              <Button onClick={onClickDeleteAnswer} id={props.replyEl._id}>
                x
              </Button>
            </ButtonWrapper>
          </ReplyListInner>
        </ReplyListWrapper>
      )}
      {isReply === true && (
        <ReplyWrite isReply={true} setIsReply={setIsReply} el={props.replyEl} />
      )}
    </div>
  );
}
