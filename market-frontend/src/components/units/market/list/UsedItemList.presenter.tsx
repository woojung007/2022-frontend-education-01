import * as s from "./UsedItemList.styles";
import { IUsedItemListUI } from "./UsedItemList.types";
import InfiniteScroll from "react-infinite-scroller";
import UsedItemPage from "./usedItem/index";
import { IBoard } from "../../../../commons/types/generated/types";
import TodayPage from "../../today/Today.container";

export default function UsedItemListUI(props: IUsedItemListUI) {
  return (
    <s.BodyHTML>
      <TodayPage />
      <s.Container>
        <s.SearchDiv>
          <s.SearchInput
            onChange={props.onChangeSearch}
            type="text"
            placeholder="제품을 검색해주세요."
          />
          <s.SearchDateInput
            type="number"
            placeholder="YYYY.MM.DD ~ YYYY.MM.DD"
          />
        </s.SearchDiv>

        <s.ListDiv>
          <div style={{ height: "700px", overflow: "auto" }}>
            {props.data && (
              <InfiniteScroll
                pageStart={0}
                loadMore={props.onLoadMore}
                hasMore={true}
                useWindow={false}
                style={{ display: "flex", flexWrap: "wrap" }}
              >
                {props.data?.fetchUseditems.map((el: IBoard, idx: any) => (
                  <UsedItemPage key={idx} el={el} />
                ))}
              </InfiniteScroll>
            )}
          </div>

          <s.ListBottomDiv>
            <s.BoardWriteBtn onClick={props.moveToWrite}>
              상품 등록하기
            </s.BoardWriteBtn>
          </s.ListBottomDiv>
        </s.ListDiv>
      </s.Container>
    </s.BodyHTML>
  );
}
