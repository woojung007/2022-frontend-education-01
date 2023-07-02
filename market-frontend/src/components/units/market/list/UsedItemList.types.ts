import { ChangeEvent } from "react";

export interface IUsedItemListUI {
  data?: any;
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  keyword: string;
  onLoadMore: () => void;
  moveToWrite: () => void;
}
