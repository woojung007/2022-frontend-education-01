import CommentList from "../../../src/components/units/board/comment/commentList/BoardCommentList.container";
import CommentWrite from "../../../src/components/units/board/comment/commentWrite/BoardCommentWrite.container";
import BoardDetail from "../../../src/components/units/board/detail/BoardDetail.container";

export default function FetchBoardPage() {
  return (
    <>
      <BoardDetail />
      <CommentWrite />
      <CommentList />
    </>
  );
}
