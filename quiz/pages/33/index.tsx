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
    variables: { boardId: "626ab70aa8255b002988dc48" },
  });

  const [likeBoard] = useMutation(LIKE_BOARD);

  const onClickOptimisticUI = () => {
    likeBoard({
      variables: { boardId: "626ab70aa8255b002988dc48" },

      optimisticResponse: {
        likeBoard: (data?.fetchBoard.likeCount || 0) + 1,
      },

      update(cache, { data }) {
        cache.writeQuery({
          query: FETCH_BOARD,
          variables: { boardId: "626ab70aa8255b002988dc48" },
          data: {
            fetchBoard: {
              _id: "626ab70aa8255b002988dc48",
              __typename: "Board",
              likeCount: data.likeBoard,
            },
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
