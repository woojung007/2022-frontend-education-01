import { gql, useMutation, useQuery } from "@apollo/client";

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

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function ApolloCacheStatePage() {
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [createBoard] = useMutation(CREATE_BOARD);
  const { data } = useQuery(FETCH_BOARDS);

  // 가장 가까운 괄호 앞에 async 붙여주기
  const onClickDelete = (boardId: string) => async () => {
    // 삭제하기로직
    await deleteBoard({
      variables: { boardId },
      update(cache, { data }) {
        const deletedId = data.deleteBoard;
        cache.modify({
          fields: {
            fetchBoards: (prev, { readField }) => {
              // el._id 가 안되므로, readField에서 꺼내오기
              const filteredPrev = prev.filter(
                (el) => readField("_id", el) !== deletedId
              );
              return [...filteredPrev];
            },
          },
        });
      },
    });
  };
  // prev - 현재 패치보드 상태

  const onClickSubmit = async () => {
    // 등록하기로직
    await createBoard({
      variables: {
        createBoardInput: {
          writer: "영희",
          password: "1234",
          title: "제목입니다~",
          contents: "내용입니다@@@",
        },
      },
      // useQuery 결과를 구조분해할당으로 받아왔따
      update(cache, { data }) {
        cache.modify({
          fields: {
            fetchBoards: (prev) => {
              return [data.createBoard, ...prev];
              // 총 11개의 글이 만들어진다
            },
          },
        });
      },
    });
  };

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span>{el.writer}</span>
          <span>{el.title}</span>
          <span>{el.contents}</span>
          <button onClick={onClickDelete(el._id)}>삭제하기</button>
        </div>
      ))}
      <button onClick={onClickSubmit}>등록하기</button>
    </div>
  );
}

// function onClickAAA(aaa) {}

// onClickAAA("철수");

// // const { name, age } = { name: "철수", age: 23 };

// function onClickAAA({ name, age }) {}

// onClickAAA({ name: "철수", age: 13 });

// const name = "철수";
// const age = 13;
// const school = "다람쥐초등학교";
// onClickAAA({ name, school });

// 1. 구조분해 할당으로 함수 파라미터 받기
// function onClickAAA({ name, age, school }){
//   console.log(name)
// }

// const child = {
//   name: "철수",
//   age: 13,
//   school: "다람쥐초등학교"
// }
// onClickAAA(child)

// const name = "철수",
//  const age = 13,
//  const school = "다람쥐초등학교"
// onClickAAA({ name, age, school})

// 2. 안좋은 옛날 방식
// function onClickAAA(name, age, school){
//   console.log(name)
// }

// const name: "철수"
// const age: 13
// const school: "다람쥐초등학교"
// onClickAAA(name, age, school)
// 이렇게 적으면 뺴먹어 버리면 데이터가 잘 못 들어가게 될 수 있다
// 그래서 구조분해할당을 써야한다
