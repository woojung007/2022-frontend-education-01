import { gql, useQuery, useMutation } from "@apollo/client";
import styled from "@emotion/styled";
import { useState, ChangeEvent } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

const Row = styled.div`
  width: 100%;
`;

const Column = styled.span`
  padding-right: 20px;
`;

const XBtn = styled.button`
  width: 30px;
  height: 30px;
`;

export default function ApolloCacheStatePage() {
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [createBoard] = useMutation(CREATE_BOARD);
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const { data } = useQuery(FETCH_BOARDS);

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value);
  };

  const onClickSubmit = async () => {
    await createBoard({
      variables: {
        createBoardInput: {
          writer,
          password,
          title,
          contents,
        },
      },
      update(cache, { data }) {
        cache.modify({
          fields: {
            fetchBoards: (prev) => {
              return [data.createBoard, ...prev];
            },
          },
        });
      },
    });
  };

  const onClickDelete = (boardId: string) => async () => {
    await deleteBoard({
      variables: { boardId },
      update(cache, { data }) {
        const deletedId = data.deleteBoard;
        cache.modify({
          fields: {
            fetchBoards: (prev, { readField }) => {
              const filteredPrev = prev.filter(
                (el: any) => readField("_id", el) !== deletedId
              );
              return [...filteredPrev];
            },
          },
        });
      },
    });
  };

  return (
    <div>
      {data?.fetchBoards.map((el: any) => (
        <Row key={el._id}>
          <Column>
            {" "}
            <XBtn onClick={onClickDelete(el._id)}>X</XBtn>
          </Column>
          <Column> {el.writer}</Column>
          <Column>{el.title}</Column>
          <Column> {el.contents}</Column>
        </Row>
      ))}
      <br />
      <br />

      <input onChange={onChangeWriter} type="text" placeholder="writer" />
      <br />
      <input onChange={onChangePassword} type="text" placeholder="password" />
      <br />
      <input onChange={onChangeTitle} type="text" placeholder="title" />
      <br />
      <input onChange={onChangeContents} type="text" placeholder="contents" />
      <br />
      <br />

      <button onClick={onClickSubmit}>등록하기</button>
    </div>
  );
}
