/* eslint-disable react/prop-types */
// 여기는 컨테이너 컴포넌트
import { useState } from "react";
import { useMutation } from "@apollo/client";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import { useRouter } from "next/router";

export default function BoardWrite(props) {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);

  const [myWriter, setMyWriter] = useState("");
  const [myTitle, setMyTitle] = useState("");
  const [myContents, setMyContents] = useState("");
  const [myMutation] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  // 수정하기 api
  const onClickUpdate = async () => {
    await updateBoard({
      variables: {
        number: Number(router.query.number),
        writer: myWriter,
        title: myTitle,
        contents: myContents,
      },
    });
    alert("게시글 수정에 성공하였습니다!!!");
    router.push(`/09-01-boards/${router.query.number}`);
  };

  // 등록하기 api
  const callGraphqlAPI = async () => {
    const result = await myMutation({
      variables: { writer: myWriter, title: myTitle, contents: myContents },
    });

    alert("게시글 등록에 성공하였습니다!!!");
    router.push(`/09-01-boards/${result.data.createBoard.number}`);
  };
  const onChangeWriter = (event) => {
    setMyWriter(event.target.value);

    if (event.target.value !== "" && myTitle !== "" && myContents !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeTitle = (event) => {
    setMyTitle(event.target.value);

    if (myWriter !== "" && event.target.value !== "" && myContents !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeContents = (event) => {
    setMyContents(event.target.value);

    if (myWriter !== "" && myTitle !== "" && event.target.value !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  return (
    <BoardWriteUI
      onChangeWriter={onChangeWriter}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      callGraphqlAPI={callGraphqlAPI}
      onClickUpdate={onClickUpdate}
      isActive={isActive}
      isEdit={props.isEdit}
    />
  );
}
