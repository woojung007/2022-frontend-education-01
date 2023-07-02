import BoardListUI from "./BoardList.presenter";
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";
import { IBoardList } from "./BoardList.types";

export default function BoardList(props: IBoardList) {
  const [keyword, setKeyword] = useState("");
  const router = useRouter();

  const moveToWrite = () => {
    router.push(`/boards/new`);
  };

  const onClickMoveToBoardDetail = (event: MouseEvent<HTMLDivElement>) => {
    router.push(`/boards/${(event.currentTarget as HTMLDivElement).id}`);
  };

  return (
    <BoardListUI
      data={props.data}
      moveToWrite={moveToWrite}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
      keyword={keyword}
      setKeyword={setKeyword}
      refetch={props.refetch}
      refetchBoardsCount={props.refetchBoardsCount}
    />
  );
}
