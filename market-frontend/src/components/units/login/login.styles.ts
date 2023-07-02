import styled from "@emotion/styled";

export const BodyHTML = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #8c775e;
  padding-top: 100px;
`;

export const Wrapper = styled.div`
  width: 36%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  color: #fdf5ec;
`;

export const LoginError = styled.div`
  color: #f0f2ae;
  margin-bottom: 10px;
  padding-left: 15px;
`;

export const CheckDiv = styled.div`
  padding: 2%;
`;

export const LoginInput = styled.input`
  width: 90%;
  border: 1px solid #fdf5ec;
  border-radius: 16px;
  background-color: #8c775e;
  line-height: 40px;
  padding: 2%;
  margin-bottom: 4%;
  color: #fdf5ec;
  ::placeholder {
    color: #fdf5ec;
  }
`;

interface IPropsIsActive {
  isActive: boolean;
}

export const LoginBtn = styled.button`
  width: 90%;
  height: 10vh;
  background-color: ${(props: IPropsIsActive) =>
    props.isActive ? "#fdf5ec" : "#8C775E"};
  color: ${(props: IPropsIsActive) => (props.isActive ? "#8C775E" : "#fdf5ec")};
  text-align: center;
  border-radius: 16px;
  border: 1px solid #fdf5ec;
`;

export const LoginWrapper = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-evenly;
  color: #fdf5ec;
`;

export const TextSpan = styled.span`
  color: #fdf5ec;
  cursor: pointer;
`;
