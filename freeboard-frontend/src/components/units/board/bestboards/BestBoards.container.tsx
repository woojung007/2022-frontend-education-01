import BoardBestListUI from "./BestBoards.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS_OF_THE_BEST } from "./BestBoards.queries";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";

export default function BoardBestList() {
  const { data: BestBoardsData } = useQuery<
    Pick<IQuery, "fetchBoardsOfTheBest">,
    IQueryFetchBoardArgs
  >(FETCH_BOARDS_OF_THE_BEST);

  return <BoardBestListUI BestBoardsData={BestBoardsData} />;
}
