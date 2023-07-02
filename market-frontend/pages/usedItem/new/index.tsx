import { withAuth } from "../../../src/components/commons/hocs/withAuth";
import UsedItemWritePage from "../../../src/components/units/market/write/UsedItemWrite.container";

function WriteUsedItemPage() {
  return <UsedItemWritePage isEdit={false} />;
}

export default withAuth(WriteUsedItemPage);
