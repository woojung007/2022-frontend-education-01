import UsedItemDetailUI from "./UsedItemDetail.presenter";
import { useQuery, useMutation } from "@apollo/client";
import {
  FETCH_USED_ITEM,
  DELETE_USED_ITEM,
  CREATE_POINT_TO_BUYING,
  TOGGLE_USED_ITEM_PICK,
} from "./UsedItemDetail.queries";
import { useRouter } from "next/router";
import { Modal } from "antd";

export default function UsedItemDetail() {
  const [deleteUseditem] = useMutation(DELETE_USED_ITEM);
  const [createPointTransactionOfBuyingAndSelling] = useMutation(
    CREATE_POINT_TO_BUYING
  );
  const [toggleUseditemPick] = useMutation(TOGGLE_USED_ITEM_PICK);
  const router = useRouter();

  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: String(router.query.useditemId) },
  });
  console.log(data);

  const moveToList = () => {
    router.push("/");
  };

  const moveToEdit = () => {
    router.push(`/usedItem/${router.query.useditemId}/edit`);
  };

  const onClickDelete = async () => {
    try {
      await deleteUseditem({
        variables: {
          useditemId: String(router.query.useditemId),
        },
      });
      Modal.success({ content: "게시글이 삭제되었습니다." });
      router.push("/");
    } catch (error: any) {
      Modal.error({ content: "삭제 실패했습니다." });
    }
  };

  const onClickPay = async () => {
    try {
      const result1 = await createPointTransactionOfBuyingAndSelling({
        variables: {
          useritemId: router.query.useditemId,
        },
      });
      console.log(result1);
      Modal.success({ content: "상품구매에 성공하였습니다!" });
      router.push("/");
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  const onClickPick = async () => {
    try {
      await toggleUseditemPick({
        variables: {
          useditemId: String(router.query.useditemId),
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM,
            variables: { useditemId: String(router.query.useditemId) },
          },
        ],
      });
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <UsedItemDetailUI
      data={data}
      moveToList={moveToList}
      moveToEdit={moveToEdit}
      onClickDelete={onClickDelete}
      onClickPay={onClickPay}
      onClickPick={onClickPick}
    />
  );
}
