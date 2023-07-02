/* eslint-disable react/prop-types */
import { SubmitButton, WriterInput } from "./BoardWrite.styles";

export default function BoardWriteUI(props) {
  return (
    <div>
      작성자 : <WriterInput type="text" onChange={props.onChangeWriter} />
      <br />
      제목 : <input type="text" onChange={props.onChangeTitle} />
      <br />
      내용 : <input type="text" onChange={props.onChangeContents} />
      <br />
      <SubmitButton onClick={props.callGraphqlAPI} isActive={props.isActive}>
        GRAPHQL-API 요청하기
      </SubmitButton>
    </div>
  );
}
