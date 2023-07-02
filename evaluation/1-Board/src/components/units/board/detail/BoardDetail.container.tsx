import * as S from "./BoardDetail.styles";
import { useRouter } from "next/router";
import { useQuery, useMutation, gql } from "@apollo/client";
import { FETCH_BOARD } from "./BoardDetail.queries";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

export default function BoardDetailPage() {
  const router = useRouter();
  const [deleteBoard] = useMutation(DELETE_BOARD);

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: String(router.query.boardId) },
  });

  const moveToList = () => {
    router.push(`../../../../../boards`);
  };

  const moveToEdit = () => {
    router.push(`../../../../../boards/${String(router.query.boardId)}/edit`);
  };

  const onClickDelete = (event: any) => {
    const DeleteVariables = {
      boardId: String(router.query.boardId),
    };
    try {
      deleteBoard({ variables: DeleteVariables });
      alert("게시물이 삭제되었습니다!");
      router.push("../boards");
    } catch (error) {}
  };

  return (
    <S.BodyHTML>
      <S.BoardWrapper>
        <S.BigTitle>{data?.fetchBoard.title}</S.BigTitle>

        <S.HRLine></S.HRLine>

        <S.ImageWrapper>
          {data?.fetchBoard.images
            ?.filter((el: string) => el)
            .map((el: string) => (
              <S.BoardImage
                key={el}
                src={`https://storage.googleapis.com/${el}`}
              />
            ))}
        </S.ImageWrapper>

        <S.ContextWrapper>
          <Avatar
            size={20}
            style={{ backgroundColor: "#6400FF" }}
            icon={<UserOutlined />}
          />
          <S.SmallTitle>{data?.fetchBoard.writer}</S.SmallTitle>
          <S.ContextDiv>{data?.fetchBoard.contents}</S.ContextDiv>
        </S.ContextWrapper>
      </S.BoardWrapper>

      <S.ButtonWrapper>
        <S.BoardBtn onClick={moveToList}>글목록</S.BoardBtn>
        <S.CancelBtn onClick={moveToEdit}>수정</S.CancelBtn>
        <S.EditBtn onClick={onClickDelete}>삭제</S.EditBtn>
      </S.ButtonWrapper>
    </S.BodyHTML>
  );
}
