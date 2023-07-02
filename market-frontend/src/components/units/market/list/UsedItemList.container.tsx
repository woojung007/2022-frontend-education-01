import UsedItemListUI from "./UsedItemList.presenter";
import { useState, ChangeEvent } from "react";
import _ from "lodash";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { FETCH_USED_ITEMS } from "./UsedItemList.queries";

export default function UsedItemPage() {
  const router = useRouter();
  const { data, refetch, fetchMore } = useQuery(FETCH_USED_ITEMS);

  const [keyword, setKeyword] = useState("");

  const getDebounce = _.debounce((data) => {
    refetch({ search: data, page: 1 });
    setKeyword(data);
    console.log(data);
  }, 200);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };

  const onLoadMore = () => {
    if (!data) return;

    fetchMore({
      variables: { page: Math.ceil(data.fetchUseditems?.length / 10) + 1 },
      updateQuery: (prev: any, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditems)
          return { fetchUseditems: [...prev.fetchUseditems] };
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };

  const moveToWrite = () => {
    router.push("/usedItem/new");
  };

  return (
    <UsedItemListUI
      data={data}
      keyword={keyword}
      onChangeSearch={onChangeSearch}
      onLoadMore={onLoadMore}
      moveToWrite={moveToWrite}
    />
  );
}
