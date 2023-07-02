/* eslint-disable no-unused-expressions */
import { useState, ChangeEvent } from "react";
import { useMutation, gql } from "@apollo/client";
import {
  IMutation,
  IMutationCreateBoardArgs,
} from "../../../src/commons/types/generated/types";

const CREATE_BOARD = gql`
  mutation myMutation($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [myWriter, setMyWriter] = useState("");
  const [myTitle, setMyTitle] = useState("");
  const [myContents, setMyContents] = useState("");
  const [data, setData] = useState("");

  const [callAPI] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);

  const callGraphqlAPI = async () => {
    const result = await callAPI({
      variables: { writer: myWriter, title: myTitle, contents: myContents },
    });

    result.data?.createBoard?.message;
    setData(result.data?.createBoard?.message || "");
  };
  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setMyWriter(event.target.value);
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setMyTitle(event.target.value);
  };

  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setMyContents(event.target.value);
  };

  return (
    <div>
      {" "}
      작성자 : <input type="text" onChange={onChangeWriter} />
      <br />
      제목 : <input type="text" onChange={onChangeTitle} />
      <br />
      내용 : <input type="text" onChange={onChangeContents} />
      <br />
      <button onClick={callGraphqlAPI}>GRAPHQL-API 요청하기</button>
      <div>{data}</div>
    </div>
  );
}
