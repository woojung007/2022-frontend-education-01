// 수정하기 페이지
import BoardWrite from "../../../../src/components/units/board/write/BoardWrite.container";
import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";

export const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      youtubeUrl
      likeCount
      dislikeCount
      createdAt
      updatedAt
      images
    }
  }
`;

export default function BoardEditPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });

  return <BoardWrite isEdit={true} data={data} />;
}
