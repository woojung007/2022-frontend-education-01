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
  const [inputs, setInputs] = useState({
    writer: "",
    title: "",
    contents: "",
  });

  const [callAPI] = useMutation(CREATE_BOARD);

  const callGraphqlAPI = async () => {
    const result = await callAPI({
      variables: { ...inputs },
    });
    console.log(result);
  };
  const onChangeInputs = (event) => {
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <div>
      {" "}
      {/* 빈태그 - 프래그먼트 */}
      작성자 : <input type="text" id="writer" onChange={onChangeInputs} />
      <br />
      제목 : <input type="text" id="title" onChange={onChangeInputs} />
      <br />
      내용 : <input type="text" id="contents" onChange={onChangeInputs} />
      <br />
      <button onClick={callGraphqlAPI}>GRAPHQL-API 요청하기</button>
      {/* <div>{data}</div> */}
    </div>
  );
}
