import PaginationUI from "./Pagination.presenter";
import { MouseEvent, useState } from "react";
import { IPaginationPage } from "./Pagination.types";

export default function PaginationPage(props: IPaginationPage) {
  const [startPage, setStartPage] = useState(1);
  const [current, setCurrent] = useState(1);

  const lastPage = Math.ceil(props.dataBoardsCount?.fetchBoardsCount / 10);

  const onClickPage = (event: MouseEvent<HTMLDivElement>) => {
    props.refetch({ page: Number((event.target as HTMLDivElement).id) });
    setCurrent(Number((event.target as HTMLDivElement).id));
  };

  const onClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
    props.refetch({ page: startPage - 10 });
    setCurrent(startPage - 10);
  };

  const onClickNextPage = () => {
    if (!(startPage + 10 <= lastPage)) return;
    setStartPage((prev) => prev + 10);
    props.refetch({ page: startPage + 10 });
    setCurrent(startPage + 10);
  };

  return (
    <PaginationUI
      onClickPage={onClickPage}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
      startPage={startPage}
      lastPage={lastPage}
      current={current}
    />
  );
}
