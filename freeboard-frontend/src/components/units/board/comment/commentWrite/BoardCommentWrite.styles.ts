import styled from "@emotion/styled";
import { ICommentCreateBtn } from "./BoardCommentWrite.types";

export const Container = styled.div`
  margin: 0 auto;
  width: 1200px;
  height: auto;
  padding-top: 30px;
  padding-bottom: 60px;
`;

export const CommentDiv = styled.div`
  width: 100%;
  height: 300px;
`;

export const CommentWriteEdit = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;
  width: 100%;
  height: 150px;
  padding-top: 40px;
`;

export const CommentTopDiv = styled.div`
  display: flex;
`;

export const CommentTitle = styled.div`
  width: 100%;
  height: 30px;
  padding-bottom: 40px;
`;

export const CommentInput = styled.input`
  width: 180px;
  height: 52px;
  border: 1px solid #bdbdbd;
  color: #828282;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 20px;
  margin-right: 24px;
`;

export const CommentWriteDiv = styled.div`
  width: 100%;
  border: 1px solid gray;
`;

export const CommentWriteTextArea = styled.textarea`
  width: 100%;
  height: 10vh;
  border: 0;
`;

export const CommentCountDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-top: 1px solid #f2f2f2;
  text-align: left;
  padding-left: 20px;
`;

export const CommentCount = styled.div`
  width: 45vw;
`;

export const CommentBtn = styled.button`
  background-color: ${(props: ICommentCreateBtn) =>
    props.isActive ? "#FFD600" : "gray"};
  width: 91px;
  height: 52px;
  text-align: center;
  color: #fff;
  cursor: pointer;
  padding: 0;
  border: none;
`;
