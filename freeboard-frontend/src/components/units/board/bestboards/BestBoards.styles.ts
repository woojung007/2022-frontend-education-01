import styled from "@emotion/styled";
import { HeartOutlined } from "@ant-design/icons";

export const BestDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  margin: 0 auto;
  padding-top: 4%;
`;

export const BestTitle = styled.div`
  font-weight: 700;
  font-size: 40px;
  line-height: 42px;
  text-align: center;
  padding-bottom: 40px;
`;

export const BestBoardsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

// bestBoards 내부
export const BestBoards = styled.div`
  width: 16vw;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  cursor: pointer;
`;

export const BestBoardPic = styled.div`
  width: 100%;
  height: 18vh;
  background: url("/images/board-img.jpeg") no-repeat;
  background-size: cover;
  border-radius: 20px 20px 0 0;
`;

export const BestBoardBottom = styled.div`
  display: flex;
  height: 16vh;
  padding: 6%;
`;

export const BestBottomLeft = styled.div`
  width: 70%;
  height: 100%;
`;

export const BestBottomRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 30%;
  height: 100%;
`;

export const BestBoardTitle = styled.div`
  width: 100%;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 20px;
`;

export const WriterDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const BestBoardUser = styled.div`
  width: 80px;
`;

export const BestBoardWriter = styled.div`
  width: 25vw;
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
  padding-left: 3%;
`;

export const BestBoardDate = styled.div`
  width: 60vw;
  padding-top: 15px;
  font-weight: 400;
  font-size: 12px;
  color: #828282;
`;

export const Heart = styled(HeartOutlined)`
  font-size: 30px;
  color: #000;
`;

export const BestBoardLikeCount = styled.div`
  text-align: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  padding-top: 5px;
`;
