import BoardWrite from "../../../../src/components/units/market/write/UsedItemWrite.container";
import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";

export const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      createdAt
      seller {
        name
      }
      useditemAddress {
        zipcode
        address
        addressDetail
      }
    }
  }
`;

export default function BoardEditPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.useditemId },
  });

  return <BoardWrite isEdit={true} data={data} />;
}
