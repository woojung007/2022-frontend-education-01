import {
  IQueryFetchBoardsArgs,
  // IQueryFetchBoardsCountArgs,
  IQuery,
} from "../../../../../../quiz/src/commons/types/generated/types";
import { ApolloQueryResult } from "@apollo/client";
export interface IPaginationPage {
  dataBoardsCount: any;
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
}

export interface IPaginationUI {
  dataRefetchBoards?: any;
  dataBoardsCount?: any;
  onClickPage: any;
  onClickPrevPage: any;
  onClickNextPage: any;
  startPage: number;
  lastPage: number;
  current: number;
}
