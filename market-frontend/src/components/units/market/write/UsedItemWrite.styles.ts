import styled from "@emotion/styled";

interface IPropsIsActive {
  isActive: boolean;
}

export const BodyHTML = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  /* background: #FFFFFF; */
`;

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 60px;
  margin-top: 100px;
  margin-bottom: 280px;
  /* box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
border: 0.5px solid #bdbdbd; */
`;

export const InputsWrapper = styled.div`
  margin-top: 4%;
  padding-top: 2%;
`;

export const Errors = styled.div`
  color: red;
`;

export const SubmitButton = styled.button`
  background-color: ${(props: IPropsIsActive) =>
    props.isActive ? "#fdf5ec" : "#8C775E"};
  color: ${(props: IPropsIsActive) => (props.isActive ? "#8C775E" : "#fdf5ec")};
  width: 30%;
  height: 10vh;
  text-align: center;
  border-radius: 16px;
  border: none;
`;

export const Inputs = styled.input`
  width: 90%;
  border: 1px solid #bdbdbd;
  border-radius: 16px;
  background-color: none;
  line-height: 40px;
  padding: 2%;
  margin-bottom: 2%;
`;

export const SmallInputs = styled.input`
  width: 15%;
  border: 1px solid #bdbdbd;
  border-radius: 16px;
  background-color: none;
  line-height: 40px;
  padding: 2%;
  margin-bottom: 2%;
`;

export const TagWrapper = styled.div`
  /* padding-left: 15px; */
`;

export const TagInputWrapper = styled.div`
  padding-top: 20px;
`;

export const TagDelBtn = styled.button`
  border: none;
`;

export const ReactQuillWrapper = styled.div`
  width: 100%;
  height: auto;
  margin-top: 4%;
  padding-bottom: 4%;
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 4%;
  margin-bottom: 4%;
`;

export const ImgRadioWrapper = styled.div`
  padding-bottom: 4%;
`;

export const RadioWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const RadioInput = styled.input`
  margin: 20px;
`;

export const MapWrapper = styled.div`
  width: 500px;
  height: 300px;
`;

// 주소창
export const AdInput = styled.input`
  width: 77px;
  height: 52px;
  margin-right: 16px;
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
export const AdWrapper = styled.div`
  width: 100%;
  padding-bottom: 20px;
  padding-left: 10px;
`;
