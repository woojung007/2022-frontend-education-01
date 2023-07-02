import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

const FETCH_BOARDS_COUNT = gql`
  query fetchBoardCount {
    fetchBoardsCount
  }
`;

const MyRow = styled.div`
  display: flex;
`;

const MyColumn = styled.div`
  /* width: 25%; */
`;

export default function MapBoardPage() {
  const [startPage, setStartPage] = useState(1);

  const { data, refetch } = useQuery(FETCH_BOARDS);
  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);

  // data.fetchBoardsCount 인데 data 이름이 dataBoardsCount 임
  const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10);

  const onClickPage = (event: any) => {
    refetch({ page: Number(event.target.id) });
  };

  const onClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
    refetch({ page: startPage - 10 });
  };

  const onClickNextPage = () => {
    if (!(startPage + 10 <= lastPage)) return;
    setStartPage((prev) => prev + 10);
    refetch({ page: startPage + 10 });
  };

  return (
    <div>
      {data?.fetchBoards.map((el: any, index: any) => (
        <MyRow key={el._id}>
          <MyColumn>
            <input type="checkbox" />
          </MyColumn>
          <MyColumn>{el.number}</MyColumn>
          <MyColumn>{index + 1}</MyColumn>
          <MyColumn>{el.writer}</MyColumn>
        </MyRow>
      ))}
      <span onClick={onClickPrevPage}>이전페이지</span>
      {new Array(10).fill(1).map(
        (_, index) =>
          index + startPage <= lastPage && (
            <span
              key={index + startPage}
              onClick={onClickPage}
              id={String(index + startPage)}
            >
              {`   `}
              {index + startPage}
            </span>
          )
      )}
      <span onClick={onClickNextPage}>다음페이지</span>
    </div>
  );
}
