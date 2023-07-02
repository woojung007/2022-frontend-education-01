// 댓글 수정
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import CommentWrite from "../../../../src/components/units/board/comment/commentWrite/BoardCommentWrite.container";

export const FETCH_BOARD_COMMENTS = gql`
  query fetchBoardComments($boardId: ID!) {
    fetchBoardComments(boardId: $boardId) {
      _id
      writer
      contents
      rating
      createdAt
      updatedAt
    }
  }
`;

export default function CommentEdit() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: { boardId: router.query.boardId },
  });

  return <CommentWrite isEdit={true} data={data} />;
}
