import { useQuery, gql, useMutation } from "@apollo/client";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      likeCount
    }
  }
`;

const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;
export default function OptimisticUIPage() {
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: "624e993fa8255b0029886254" },
  });
  // 글로벌 스테이트에 저장

  const [likeBoard] = useMutation(LIKE_BOARD);

  const onClickOptimisticUI = () => {
    likeBoard({
      variables: { boardId: "624e993fa8255b0029886254" },
      //   refetchQueries: [
      //     {
      //       query: FETCH_BOARD,
      //       variables: { boardId: "624e993fa8255b0029886254" },
      //     },
      //   ],

      optimisticResponse: {
        likeBoard: (data?.fetchBoard.likeCount || 0) + 1,
      },
      // cache 직접수정하기
      update(cache, { data }) {
        // data - writeBoard의 데이터
        cache.writeQuery({
          query: FETCH_BOARD,
          variables: { boardId: "624e993fa8255b0029886254" },
          data: {
            fetchBoard: {
              _id: "624e993fa8255b0029886254",
              __typename: "Board",
              likeCount: data.likeBoard, // data - fetchBoard의 데이터
              // likeCount 조작하기 - 응답으로 받는 결과로
            }, // 두개는 필수 입력 -이게 빠지면 글로벌 스테이트에서 찾지를 못함
          },
        });
      },
    });
  };
  return (
    <div>
      <h1>옵티미스틱UI</h1>
      <div>현재카운트(좋아요): {data?.fetchBoard.likeCount}</div>
      <button onClick={onClickOptimisticUI}>좋아요 올리기 !!</button>
    </div>
  );
}
