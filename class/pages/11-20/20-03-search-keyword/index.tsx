import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { ChangeEvent, useState } from "react";
import _ from "lodash";
import { v4 as uuidv4 } from "uuid";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards($search: String, $page: Int) {
    fetchBoards(search: $search, page: $page) {
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
  width: 25%;
`;

interface IProps {
  isMatched: boolean;
}

// props를 활용하여 3항 연산자로 트루일때 레드 false일때 블랙을 준다.
const Word = styled.span`
  color: ${(props: IProps) => (props.isMatched ? "red" : "black")};
`;

export default function MapBoardPage() {
  // const [search, setSearch] = useState("");

  const [keyword, setKeyword] = useState("");

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  // 0.2초안에 아무런 재작업이 없으면 실행되는 부분이 { } 안쪽 부분
  const getDebounce = _.debounce((data: any) => {
    refetch({ search: data, page: 1 });
    // 검색한 단어를 keyword에 저장해준다.
    setKeyword(data);
  }, 200);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };

  // const onClickSearch = () => {
  //   refetch({ search, page: 1 });
  // };

  const onClickPage = (event: any) => {
    refetch({ page: Number(event.target.id) });
  };

  return (
    <div>
      검색어입력: <input type="text" onChange={onChangeSearch} />
      {/* <button onClick={onClickSearch}>검색하기</button> */}
      {data?.fetchBoards.map((el) => (
        <MyRow key={el._id}>
          <MyColumn>{el.writer}</MyColumn>
          {/* 검색된 단어를 랜더링된 게시글 목록에서 색을 바꿔서 보여주고 싶을때 문자를 다 쪼개서{split(시크릿코드)사용} span태그로 쪼개진 단어를 감싸 색을(emotion 활용) 변경해줌 */}
          {/* 시크릿코드를 사용하기 전에 검색한 단어에 시크릿코드를 붙여줘야하는데 replaceAll("keyword","#&$keyword#$&") 활용한다. */}
          {/* 이후 map을 활용하여 검색한 keyword를 전부 뿌려주고 span으로 감싸주어 el과 keyword가 같을때 emotion을 준다. key 값이 애매하기 때문에 uuid로 key값을 준다. */}
          <MyColumn>
            {el.title
              .replaceAll(keyword, `#$%${keyword}#$%`)
              .split("#$%")
              .map((el) => (
                <Word key={uuidv4()} isMatched={keyword === el}>
                  {" "}
                  {el}
                </Word>
              ))}
          </MyColumn>
        </MyRow>
      ))}
      {new Array(10).fill(1).map((_, index) => (
        <span key={index + 1} onClick={onClickPage} id={String(index + 1)}>
          {index + 1}
        </span>
      ))}
    </div>
  );
}
