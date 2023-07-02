import UsedItemDetail from "../../../src/components/units/market/detail/UsedItemDetail.container";
import CommentWrite from "../../../src/components/units/market/comment/commentWrite/CommentWrite.container";
import CommentList from "../../../src/components/units/market/comment/commentList/commentList.container";

export default function UsedItemDetailPage() {
  return (
    <>
      <UsedItemDetail />
      <CommentWrite isEdit={false} />
      <CommentList />
    </>
  );
}
