import { CloseOutlined, EditOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 80px;
`;

export const DetailTop = styled.div`
  display: flex;
  width: 100%;
  /* background-color: aliceblue; */
  padding: 70px 0 100px 100px;
`;
export const TopRight = styled.div`
  margin-left: 70px;
  margin-right: 60px;
  width: 60%;
  /* background-color: azure; */
`;

export const TopRightTop = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom: 1px solid #555;
  padding: 20px;
`;

export const TopRightMid = styled.div`
  display: flex;
  flex-direction: column;
  height: 207px;
  border-bottom: 1px solid #555;
`;

export const RightTopTop = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NameSpan = styled.div`
  font-weight: 700;
  font-size: 24px;
`;

export const EditBtn = styled(EditOutlined)`
  font-size: 20px;
  padding-right: 10px;
`;

export const DeleteBtn = styled(CloseOutlined)`
  font-size: 20px;
`;

export const RemarkDiv = styled.div`
  height: 130px;
  padding: 20px;
  font-weight: 400;
  font-size: 20px;
`;

export const HashDiv = styled.div`
  padding: 20px;
`;

export const HashSpan = styled.span`
  display: inline-block;
  width: 100px;
  height: 30.51px;
  border-radius: 20px;
  background: #ffe004;
  font-weight: 400;
  font-size: 20px;
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  padding-top: 5px;
  margin-right: 10px;
`;

export const ImageDiv = styled.div``;
export const DetailBottom = styled.div`
  display: flex;
  width: 100%;

  /* background-color: beige; */
`;
export const BorderBottom = styled.div`
  border-bottom: 3px solid #555;
  height: 80px;
  padding-left: 40px;
  padding-top: 10px;
`;
export const BoardContents = styled.div`
  padding-top: 10px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 35px;
`;

export const PickButton = styled.button`
  width: 152px;
  height: 100px;
  background: #c9c9c9;
  color: #fff;
  font-weight: 700;
  font-size: 30px;
  text-align: center;
  border: none;
`;

export const BasketButton = styled.button`
  border: none;
  width: 312px;
  height: 100px;
  background: #a0a0a0;
  color: #fff;
  font-weight: 700;
  font-size: 30px;
`;

export const BuyButton = styled.button`
  width: 312px;
  height: 100px;
  background: #000000;
  color: #fff;
  font-weight: 700;
  font-size: 30px;
  border: none;
`;

export const PriceSpan = styled.span`
  font-weight: 500;
  font-size: 40px;
`;
export const Won = styled.span`
  font-weight: 400;
  font-size: 20px;
`;

export const BottomLeft = styled.div`
  width: 70%;
  padding-left: 100px;
  padding-right: 37px;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #555;
`;

export const MapDiv = styled.div`
  width: 100%;
  height: 448px;
  background-color: #888;
  margin-right: 76px;
`;

export const MapTitleWrapper = styled.div`
  display: flex;
  padding-top: 10px;
  padding-left: 40px;
`;
export const BottomRight = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 100px;
`;

export const Profile = styled.div`
  width: 75px;
  height: 75px;
  border-radius: 50px;
  background: #c4c4c4;
`;

export const UserDiv = styled.div`
  height: 140px;
  border-bottom: 1px solid #555;
  display: flex;
  padding-top: 40px;
`;

export const UserName = styled.div`
  width: 300px;
  height: 32px;
  font-weight: 400;
  font-size: 32px;
  padding-left: 30px;
  padding-top: 10px;
`;

export const CommentTextArea = styled.textarea`
  width: 379px;
  height: 147px;
  background: #e9e9e9;
  margin-top: 40px;
`;
export const CommentWrapper = styled.div`
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
export const WriteBtn = styled.button`
  width: 116px;
  height: 42px;
  border: none;
  background: #ffe004;
  margin-top: 20px;
  margin-left: 260px;
`;
export const CommentListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`;

export const WriterProfile = styled.div`
  display: flex;
  padding-top: 20px;
  padding-right: 30px;
`;

export const SmallProfile = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background: #c4c4c4;
`;
export const CommentDiv = styled.div`
  padding-top: 20px;
  padding-left: 20px;
  font-weight: 400;
  font-size: 24px;
`;
export const CommentUserName = styled.div`
  font-weight: 400;
  font-size: 24px;
`;

export const CommentUserDiv = styled.div`
  padding-left: 20px;
`;

export const CommentBtnWrapper = styled.div`
  padding-left: 100px;
`;
