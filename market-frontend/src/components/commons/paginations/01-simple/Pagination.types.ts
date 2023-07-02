export interface IPaginationPage {
  dataBoardsCount: any;
  refetch: any;
  fetchBoardsCount: number;
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
