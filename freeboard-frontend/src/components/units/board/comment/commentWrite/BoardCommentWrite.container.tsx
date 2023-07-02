import { ChangeEvent, useState } from "react";
import { useMutation } from "@apollo/client";
import {
  CREATE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
  UPDATE_BOARD_COMMENT,
} from "./BoardCommentWrite.queries";
import CommentWriteUI from "./BoardCommentWrite.presenter";
import { useRouter } from "next/router";
import { Modal } from "antd";
import { ICommentWrite } from "./BoardCommentWrite.types";
import {
  IMutation,
  IMutationCreateBoardCommentArgs,
} from "../../../../../commons/types/generated/types";
import { IMutationUpdateBoardCommentArgs } from "../../../../../../../quiz/src/commons/types/generated/types";

export default function CommentWrite(props: ICommentWrite) {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [value, setRating] = useState(5);

  const [updateComment] = useMutation<
    Pick<IMutation, "updateBoardComment">,
    IMutationUpdateBoardCommentArgs
  >(UPDATE_BOARD_COMMENT);
  const [createBoardComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENT);

  const handleChange = (value: any) => {
    setRating(value);
  };

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);

    if (event.target.value !== "" && password !== "" && contents !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);

    if (writer !== "" && event.target.value !== "" && contents !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
    if (
      writer !== "" &&
      password !== "" &&
      event.target.value &&
      contents !== ""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onClickWriteComment = async () => {
    if (writer === "") {
      Modal.error({ content: "이름을 입력해 주세요" });
    } else if (password === "") {
      Modal.error({ content: "비밀번호를 입력해주세요" });
    } else if (contents === "") {
      Modal.error({ content: "내용을 입력해주세요" });
    } else if (writer !== "" && password !== "" && contents !== "") {
      Modal.success({ content: "댓글 등록에 성공했습니다!!" });
    }

    try {
      await createBoardComment({
        variables: {
          createBoardCommentInput: {
            writer: writer,
            password: password,
            contents: contents,
            rating: Number(value),
          },
          boardId: String(router.query.boardId),
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: String(router.query.boardId) },
          },
        ],
      });
      setWriter("");
      setPassword("");
      setContents("");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickUpdate = () => {
    try {
      updateComment({
        variables: {
          updateBoardCommentInput: {
            contents: contents,
            rating: Number(value),
          },
          password: password,
          boardCommentId: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: {
              boardCommentId: router.query.boardId,
            },
          },
        ],
      });
      props.setIsEdit?.(false);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <CommentWriteUI
      onClickWriteComment={onClickWriteComment}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
      isActive={isActive}
      contents={contents}
      writer={writer}
      password={password}
      handleChange={handleChange}
      value={value}
      isEdit={props.isEdit}
      setIsEdit={props.setIsEdit}
      onClickUpdate={onClickUpdate}
      el={props.el}
    />
  );
}
