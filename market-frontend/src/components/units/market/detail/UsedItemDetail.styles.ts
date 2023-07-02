import styled from "@emotion/styled";
import {
  PaperClipOutlined,
  EnvironmentOutlined,
  HeartOutlined,
} from "@ant-design/icons";

export const BodyHTML = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContentsContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 30px;
  margin-top: 40px;
  margin-bottom: 80px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-top: 80px;
  padding-bottom: 20px;
  border-bottom: 1px solid #d9cdbf;
`;

export const HeaderTopDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  padding-bottom: 20px;
  float: right;
`;

export const LocationDiv = styled.div`
  color: black;
  text-align: center;
`;

export const InfoDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 30vw;
  padding-right: 17px;
`;

export const AvatarWrapper = styled.div`
  width: 50px;
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
  font-size: 14px;
  color: #707365;
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

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const BoardDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const TagWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 30px;
`;

export const HashTag = styled.div`
  width: 8%;
  background-color: #fdf5ec;
  font-weight: 700;
  color: #777;
  padding: 5px 0 5px 10px;
  margin-right: 10px;
  border-radius: 15px;
`;

export const BoardTitle = styled.div`
  font-weight: 700, Bold;
  font-size: 36px;
`;

export const BoardContents = styled.div`
  width: 100%;
  margin-bottom: 40px;
  margin-top: 40px;
  color: #4f4f4f;
  font-size: 18px;
  line-height: 27px;
`;

export const ContentsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 30px 20px 40px 30px;
`;

export const ContentsTop = styled.div`
  width: 90%;
`;

export const BoardRemarks = styled.div`
  font-size: 18px;
  color: #bdbdbd;
`;

export const BoardPrice = styled.div`
  font-weight: 700;
  font-size: 28px;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ImageArea = styled.img`
  width: 300px;
  height: 300px;
`;

export const LikeDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 50px;
  height: 50px;
`;

export const HeartIcon = styled(HeartOutlined)`
  color: #8c775e;
  cursor: pointer;
  font-size: 26px;
`;

export const LikeNum = styled.div`
  height: 27px;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  color: #8c775e;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1200px;
  height: 220px;
  border-bottom: 1px solid #d9cdbf;
  margin-bottom: 80px;
`;

export const BtnDiv = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 80px;
`;

export const GoBtn = styled.button`
  width: 180px;
  height: 52px;
  margin-right: 15px;
  background-color: #fff;
  color: #8c775e;
  border: 1px solid #8c775e;
  :hover {
    background-color: #8c775e;
    color: #fdf5ec;
  }
`;

export const MapWrapper = styled.div`
  width: 790px;
  height: 360px;
  margin-bottom: 30px;
`;
