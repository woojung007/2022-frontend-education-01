import { withAuth } from "../../../src/components/commons/hocs/withAuth";
import BoardWrite from "../../../src/components/units/board/write/BoardWrite.container";

function BoardNewPage() {
  return <BoardWrite isEdit={false} />;
}

export default withAuth(BoardNewPage);
