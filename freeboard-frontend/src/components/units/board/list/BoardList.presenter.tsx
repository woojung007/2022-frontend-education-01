import * as s from "./BoardList.styles";
import { IListUIProps } from "./BoardList.types";
import { v4 as uuidv4 } from "uuid";
import styled from "@emotion/styled";
import Searchbar01 from "../../../commons/searchbars/01/searchbar01";

interface WordStyleProps {
  isMatched: boolean;
}

const Word = styled.span`
  color: ${(props: WordStyleProps) => (props.isMatched ? "crimson" : "black")};
`;

export default function BoardListUI(props: IListUIProps) {
  return (
    <s.BodyHTML>
      <s.Container>
        <Searchbar01
          setKeyword={props.setKeyword}
          refetch={props.refetch}
          refetchBoardsCount={props.refetchBoardsCount}
        />
        <s.ListDiv>
          <s.RowTitle>
            <s.ColumnNum>ID</s.ColumnNum>
            <s.Column>제목</s.Column>
            <s.ColumnSmall>작성자</s.ColumnSmall>
            <s.ColumnSmall>날짜</s.ColumnSmall>
          </s.RowTitle>
          {props.data?.fetchBoards.map((el: any, index: number) => (
            <s.Row
              key={el._id}
              id={el._id}
              onClick={props.onClickMoveToBoardDetail}
            >
              <s.ColumnNum>{index + 1}</s.ColumnNum>
              <s.Column>
                {el.title
                  .replaceAll(props.keyword, `#$%${props.keyword}#$%`)
                  .split("#$%")
                  .map((title: any) => (
                    <Word key={uuidv4()} isMatched={props.keyword === title}>
                      {title}
                    </Word>
                  ))}
              </s.Column>
              <s.ColumnSmall>{el.writer}</s.ColumnSmall>
              <s.ColumnSmall>{el.createdAt.slice(0, 10)}</s.ColumnSmall>
            </s.Row>
          ))}

          <s.ListBottomDiv>
            <s.BoardWriteBtn onClick={props.moveToWrite}>
              게시물 등록하기
            </s.BoardWriteBtn>
          </s.ListBottomDiv>
        </s.ListDiv>
      </s.Container>
    </s.BodyHTML>
  );
}
