import styled from "@emotion/styled";
import {
  PaperClipOutlined,
  EnvironmentOutlined,
  LikeFilled,
  DislikeFilled,
} from "@ant-design/icons";

export const BodyHTML = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContentsContainer = styled.div`
  width: 1200px;
  height: auto;
  padding: 0 100px 20px 100px;
  border: 0.5px solid #bdbdbd;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  margin-top: 101px;
  margin-bottom: 87px;
`;

// Header
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-top: 80px;
  padding-bottom: 20px;
  border-bottom: 1px solid #bdbdbd;
`;

export const HeaderTopDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  padding-bottom: 20px;
  float: right;
`;

export const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
`;

export const LocationDiv = styled.div`
  color: black;
  text-align: center;
`;

export const InfoDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 30vw;
  padding-right: 17px;
`;

export const InfoText = styled.div`
  width: 100%;
  padding-left: 10px;
  margin-left: 10px;
`;

export const Writer = styled.div`
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
`;

export const Date = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #828282;
`;

export const IconDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const LinkIcon = styled(PaperClipOutlined)`
  margin-right: 30px;
  cursor: pointer;
  color: #bdbdbd;
  font-size: 35px;
  :hover {
    color: #000;
  }
`;

export const LocationIcon = styled(EnvironmentOutlined)`
  cursor: pointer;
  color: #bdbdbd;
  font-size: 30px;
  &:hover {
    color: #000;
  }
`;

// content
export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const BoardDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const ImageBoardDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const BoardTitle = styled.div`
  width: 100%;
  font-weight: 700, Bold;
  font-size: 36px;
  padding: 80px 0 40px 0;
`;

export const BoardImage = styled.img`
  width: 996px;
  height: 480px;
  margin-bottom: 40px;
  border-bottom: 1px solid #ebebeb;
`;

export const BoardContents = styled.div`
  width: 100%;
  border-bottom: 1px solid #ebebeb;

  margin-bottom: 40px;
`;

export const BoardVideo = styled.div`
  width: 486px;
  height: 240px;
  border-bottom: 1px solid #ebebeb;
  margin-bottom: 163px;
`;

// 좋아요
export const BoardLike = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 40vw;
  margin-bottom: 80px;
`;

export const LikeDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 40vw;
  height: 10vh;
`;

export const LikeIcon = styled(LikeFilled)`
  color: #ffd600;
  cursor: pointer;
  font-size: 30px;
  &:hover {
  }
`;

export const LikeNum = styled.div`
  height: 27px;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  color: #ffd600;
`;

export const DisLikeIcon = styled(DislikeFilled)`
  color: #888;
  font-size: 30px;
  cursor: pointer;
  &:hover {
    color: black;
  }
`;

export const DisLikeNum = styled.div`
  height: 27px;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: #828282;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1200px;
  height: 220px;
  border-bottom: 1px solid #bdbdbd;
  margin-bottom: 80px;
`;

export const BtnDiv = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 87px;
`;

export const GoBtn = styled.button`
  width: 180px;
  height: 52px;
  border: 1px solid #bdbdbd;
  cursor: pointer;
`;
