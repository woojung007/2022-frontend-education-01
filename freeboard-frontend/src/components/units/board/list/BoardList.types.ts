import { ApolloQueryResult } from "@apollo/client";
import { MouseEvent } from "react";
import {
  IQueryFetchBoardsCountArgs,
  IQueryFetchBoardsArgs,
  IQuery,
} from "../../../../../../quiz/src/commons/types/generated/types";

// container
export interface IBoardList {
  data?: any;
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  refetchBoardsCount: (
    variables?: Partial<IQueryFetchBoardsCountArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoardsCount">>>;
}

// presenter
export interface IListUIProps {
  data?: any;
  moveToWrite: () => void;
  onClickMoveToBoardDetail: (event: MouseEvent<HTMLDivElement>) => void;
  keyword: string;
  setKeyword: any;
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  refetchBoardsCount: (
    variables?: Partial<IQueryFetchBoardsCountArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoardsCount">>>;
}
