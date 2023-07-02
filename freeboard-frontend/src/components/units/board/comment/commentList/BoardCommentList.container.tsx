import CommentListUI from "./BoardCommentList.presenter";
import { useQuery, useMutation } from "@apollo/client";
import {
  FETCH_BOARD_COMMENTS,
  DELETE_BOARD_COMMENT,
} from "./BoardCommentList.queries";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { Modal } from "antd";
import {
  IMutation,
  IMutationDeleteBoardCommentArgs,
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../../commons/types/generated/types";

export default function CommentList() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [commentId, setCommentId] = useState("");

  const [deleteComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: String(router.query.boardId),
    },
  });

  const onClickDeleteComment = async () => {
    try {
      await deleteComment({
        variables: { password: password, boardCommentId: commentId },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: String(router.query.boardId) },
          },
        ],
      });
      Modal.success({ content: "댓글이 삭제되었습니다." });
      setIsOpen(false);
    } catch (error: any) {
      Modal.error({ content: "삭제 실패했습니다." });
    }
  };

  // infinite-scroll
  const onLoadMore = () => {
    if (!data) return;

    fetchMore({
      variables: {
        boardId: String(router.query.boardId),
        page: Math.ceil(data.fetchBoardComments.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchBoardComments)
          return { fetchBoardComments: [...prev.fetchBoardComments] };
        return {
          fetchBoardComments: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult.fetchBoardComments,
          ],
        };
      },
    });
  };

  const showModal = (event: any) => {
    setIsOpen(true);
    setCommentId(event.target.id);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <CommentListUI
      data={data}
      onClickDeleteComment={onClickDeleteComment}
      showModal={showModal}
      handleCancel={handleCancel}
      isOpen={isOpen}
      onChangePassword={onChangePassword}
      onLoadMore={onLoadMore}
    />
  );
}
