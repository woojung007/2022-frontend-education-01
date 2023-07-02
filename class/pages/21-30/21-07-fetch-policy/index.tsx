import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import FetchPolicyTest from "../../../src/components/commons/units/board/21-fetch-policy/index";
const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

export default function FetchPolicyPage() {
  const { data } = useQuery(FETCH_BOARDS);
  const [aaa, setAaa] = useState(false);

  const onClickAaa = () => {
    setAaa(true);
  };

  return (
    <div>
      <button onClick={onClickAaa}>
        클릭하면 새로운 컴포넌트가 나타납니다!!!
      </button>
      {aaa && <FetchPolicyTest />}
    </div>
  );
}
