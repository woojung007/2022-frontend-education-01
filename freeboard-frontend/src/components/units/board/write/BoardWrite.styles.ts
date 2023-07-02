import styled from "@emotion/styled";
import { IRegisterBtnProps } from "./BoardWrite.types";

export const BodyHTML = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  background: #ffffff;
`;

export const Container = styled.div`
  width: 1200px;
  height: auto;
  padding: 60px 100px 100px 100px;
  border: 0.5px solid #bdbdbd;
  margin-top: 101px;
  margin-bottom: 280px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  text-align: center;
`;

export const BigTitle = styled.div`
  text-align: center;
  font-weight: 700;
  font-size: 36px;
  padding-bottom: 80px;
  line-height: 53px;
`;

export const NamePassDiv = styled.div`
  width: 996px;
  height: auto;
  padding-bottom: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const SmallTitle = styled.div`
  font-size: 16px;
  font-weight: 500, medium;
  padding-bottom: 16px;
`;

export const NamePassInput = styled.input`
  width: 486px;
  height: 52px;
  margin-bottom: 10px;
`;

export const TitleInput = styled.input`
  width: 996px;
  height: 52px;
  margin-bottom: 10px;
`;

export const ContentInput = styled.textarea`
  width: 996px;
  height: 480px;
  margin-bottom: 10px;
`;

export const AdContainer = styled.div`
  width: 996px;
`;

export const AdInput = styled.input`
  width: 77px;
  height: 52px;
  margin-right: 16px;
`;

export const AdDiv = styled.div`
  margin-bottom: 16px;
`;

export const AdBtn = styled.button`
  width: 124px;
  height: 52px;
  background-color: black;
  color: white;
  font-size: 16px;
  font-weight: 500, medium;
  text-align: center;
  border: none;
`;

export const PicDiv = styled.div`
  width: 282px;
  display: flex;
  padding-bottom: 40px;
`;

export const PicUploadDiv = styled.div`
  width: 78px;
  height: 78px;
  background-color: #bdbdbd;
  margin-right: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 23px 0;
  cursor: pointer;
`;

export const MainSet = styled.div`
  width: 200px;
  font-size: 16px;
  font-weight: 500, medium;
`;

export const SetSpan = styled.span`
  padding-right: 22px;
  padding-left: 10px;
`;

export const SetRadio = styled.input``;

export const RegDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 996px;
  padding-top: 80px;
`;

export const RegisterBtn = styled.button`
  width: 179px;
  height: 52px;
  background-color: ${(props: IRegisterBtnProps) =>
    props.isActive ? "#FFD600" : "gray"};
  text-align: center;
  font-size: 16px;
  border: none;
  cursor: pointer;
`;

export const Error = styled.div`
  font-size: 13px;
  color: red;
  padding-bottom: 20px;
`;
