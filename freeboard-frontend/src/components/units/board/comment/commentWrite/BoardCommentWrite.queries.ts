import { gql } from "@apollo/client";

export const CREATE_BOARD_COMMENT = gql`
  mutation CommentMutation(
    $createBoardCommentInput: CreateBoardCommentInput!
    $boardId: ID!
  ) {
    createBoardComment(
      createBoardCommentInput: $createBoardCommentInput,
      boardId: $boardId
    ) {
      _id
      writer
      contents
      rating
      createdAt
      updatedAt
    }
  }
`;


export const FETCH_BOARD_COMMENTS = gql`
  query fetchBoardComments($boardId: ID!) {
    fetchBoardComments(boardId: $boardId) {
      _id
      writer
      contents
      rating
      createdAt
      updatedAt
    }
  }
`;



