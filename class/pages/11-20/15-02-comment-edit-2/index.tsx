import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";

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

const MyRow = styled.div`
  display: flex;
`;

const MyColumn = styled.div`
  width: 25%;
`;

export default function MapBoardPage() {
  const [myIndex, setMyIndex] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const { data } = useQuery(FETCH_BOARDS);

  // 원본이 true로 바뀌어 버렸기 때문에 setState가 작동하지 않는다.
  // 그래서 얕은복사가 필요하다. (스프레드 연산자)

  const onClickEdit = (event: any) => {
    // const aaa = [...myIndex] 도 가능
    const aaa = myIndex;
    aaa[event.target.id] = true;
    console.log(aaa);
    setMyIndex([...aaa]);
  };

  return (
    <div>
      {data?.fetchBoards.map((el: any, index: any) =>
        myIndex[index] === false ? (
          <MyRow key={el._id}>
            <MyColumn>
              <input type="checkbox" />
            </MyColumn>
            <MyColumn>{el._id}</MyColumn>
            <MyColumn>{index + 1}</MyColumn>
            <MyColumn>{el.writer}</MyColumn>
            <button onClick={onClickEdit} id={index}>
              수정
            </button>
          </MyRow>
        ) : (
          <div>수정하기 화면입니다</div>
        )
      )}
    </div>
  );
}
