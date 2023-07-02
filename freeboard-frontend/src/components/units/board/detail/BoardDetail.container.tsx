import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import BoardDetailUI from "./BoardDetail.presenter";
import {
  FETCH_BOARD,
  LIKE_BOARD,
  DISLIKE_BOARD,
  DELETE_BOARD,
} from "./BoardDetail.queries";
import { IDeleteVariables } from "./BoardDetail.types";
import { MouseEvent } from "react";
import { Modal } from "antd";
import {
  IMutation,
  IMutationLikeBoardArgs,
  IMutationDislikeBoardArgs,
} from "../../../../commons/types/generated/types";

export default function BoardDetail() {
  const [callLikeCount] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);
  const [callDislikeCount] = useMutation<
    Pick<IMutation, "dislikeBoard">,
    IMutationDislikeBoardArgs
  >(DISLIKE_BOARD);
  const [deleteBoard] = useMutation(DELETE_BOARD);

  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: String(router.query.boardId) },
  });

  const onClickLikeUp = async () => {
    try {
      await callLikeCount({
        variables: { boardId: String(router.query.boardId) },
        refetchQueries: [
          {
            query: FETCH_BOARD,
            variables: { boardId: String(router.query.boardId) },
          },
        ],
      });
      Modal.success({ content: "게시글을 좋아합니다!" });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickDislikeUp = async () => {
    try {
      await callDislikeCount({
        variables: { boardId: String(router.query.boardId) },
        refetchQueries: [
          {
            query: FETCH_BOARD,
            variables: { boardId: String(router.query.boardId) },
          },
        ],
      });
      Modal.warning({ content: "게시글을 싫어합니다!!" });
    } catch (error) {}
  };

  const onClickDelete = (event: MouseEvent<HTMLButtonElement>) => {
    const DeleteVariables: IDeleteVariables = {
      boardId: (event.target as HTMLButtonElement).id,
    };
    deleteBoard({ variables: DeleteVariables });
    router.push("../boards");
  };

  const moveToList = () => {
    router.push(`../../../../../boards`);
  };

  const moveToEdit = () => {
    router.push(`../../../../../boards/${String(router.query.boardId)}/edit`);
  };

  return (
    <BoardDetailUI
      data={data}
      onClickLikeUp={onClickLikeUp}
      onClickDislikeUp={onClickDislikeUp}
      onClickDelete={onClickDelete}
      moveToEdit={moveToEdit}
      moveToList={moveToList}
    />
  );
}
