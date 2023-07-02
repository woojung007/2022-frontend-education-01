import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { MouseEvent, useState } from "react";

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

const MyRow = styled.div`
  display: flex;
`;

const MyColumn = styled.div`
  /* width: 25%; */
`;

export default function MapBoardPage() {
  const [startPage, setStartPage] = useState(1);
  const { data, refetch } = useQuery(FETCH_BOARDS);

  const onClickPage = (event: MouseEvent<HTMLElement>) => {
    refetch({ page: Number((event.target as HTMLElement).id) });
  };

  const onClickPrevPage = (event: MouseEvent<HTMLElement>) => {
    setStartPage((prev) => prev - 10);
    refetch({ page: Number((event.target as HTMLElement).id) });
  };

  const onClickNextPage = (event: MouseEvent<HTMLElement>) => {
    setStartPage((prev) => prev + 10);
    refetch({ page: Number((event.target as HTMLElement).id) });
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
      {new Array(10).fill(1).map((_, index) => (
        <span
          key={index + startPage}
          onClick={onClickPage}
          id={String(index + startPage)}
        >
          {index + startPage}
        </span>
      ))}
      <span onClick={onClickNextPage}>다음페이지</span>
    </div>
  );
}
