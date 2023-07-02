import styled from "@emotion/styled";

export const BodyHTML = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;
`;

export const CommentWrapper = styled.div`
  border: 1px solid #333;
  color: #888;
`;

export const CommentTop = styled.div`
  display: flex;
  padding-bottom: 40px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 20px;
  /* background-color: aliceblue; */
`;

export const CommentTextArea = styled.textarea`
  width: 100%;
`;

export const CommentBtn = styled.button`
  color: #fff;
  background-color: #111;
  border-radius: 0;
  border: none;
`;
