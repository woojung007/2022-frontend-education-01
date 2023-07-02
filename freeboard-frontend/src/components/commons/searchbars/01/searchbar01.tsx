import styled from "@emotion/styled";
import _ from "lodash";
import { ChangeEvent } from "react";
import {
  IQueryFetchBoardsArgs,
  IQuery,
  IQueryFetchBoardsCountArgs,
} from "../../../../../../quiz/src/commons/types/generated/types";
import { ApolloQueryResult } from "@apollo/client";

export const SearchDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  padding-bottom: 40px;
  padding-top: 40px;
`;

export const SearchInput = styled.input`
  width: 78%;
  height: 52px;
  background: #f2f2f2;
  border: none;
  border-radius: 10px;
  padding-left: 15px;
  margin-right: 40px;
`;

export const SearchDateInput = styled.input`
  width: 20%;
  height: 52px;
  border: 1px solid #bdbdbd;
  font-weight: 400;
  font-size: 12px;
  line-height: 24px;
  text-align: center;
  color: #bdbdbd;
`;

interface IPropsSearchbar {
  setKeyword: any;
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  refetchBoardsCount: (
    variables?: Partial<IQueryFetchBoardsCountArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoardsCount">>>;
}

export default function Searchbar01(props: IPropsSearchbar) {
  const getDebounce = _.debounce((data) => {
    props.refetch({ search: data, page: 1 });
    props.refetchBoardsCount({ search: data });
    props.setKeyword(data);
  }, 200);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };

  return (
    <SearchDiv>
      <SearchInput
        onChange={onChangeSearch}
        type="text"
        placeholder="제목을 검색해주세요."
      />
      <SearchDateInput type="number" placeholder="YYYY.MM.DD ~ YYYY.MM.DD" />
    </SearchDiv>
  );
}
