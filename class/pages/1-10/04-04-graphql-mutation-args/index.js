import { useState } from "react";
import { useMutation, gql } from "@apollo/client";

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
  const [data, setData] = useState("");
  const [callApi] = useMutation(CREATE_BOARD);

  const callGraphqlAPi = async () => {
    const result = await callApi({
      variables: {
        writer: "철수",
        title: "우정이의 개발일지",
        contents: "화이팅!",
      },
    });
    console.log(result);
    setData(result.data.title);
  };

  return (
    <>
      <button onClick={callGraphqlAPi}>GRAPHQL-API 요청하기</button>
      <div>{data}</div>
    </>
  );
}
