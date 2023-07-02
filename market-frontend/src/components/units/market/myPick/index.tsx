import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";

const FETCH_USED_ITEMS_I_PICKED = gql`
  query fetchUseditemsIPicked($search: String, $page: Int) {
    fetchUseditemsIPicked(search: $search, page: $page) {
      _id
      name
      remarks
      price
      images
    }
  }
`;

const PickWrapper = styled.div`
  width: 100%;
`;

const PickImg = styled.img`
  width: 250px;
`;

export default function MyPickContainer() {
  const { data } = useQuery(FETCH_USED_ITEMS_I_PICKED, {
    variables: {
      search: "",
      page: 1,
    },
  });
  console.log("fetch", data);

  return (
    <div>
      <h1>찜 목록</h1>
      <PickWrapper>
        {data?.fetchUseditemsIPicked.map((el: any) => (
          <div key={el._id}>
            <PickImg src={`https://storage.googleapis.com/${el.images}`} />
            <div>{el.name}</div>
            <div>{el.remarks}</div>
            <div>{el.price}</div>
          </div>
        ))}
      </PickWrapper>
    </div>
  );
}
