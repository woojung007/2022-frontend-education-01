import styled from "@emotion/styled";

interface IPropsIsActive {
  isActive: boolean;
}

export const BodyHTML = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #8c775e;
  color: #fdf5ec;
  padding-top: 80px;
`;

export const Wrapper = styled.div`
  width: 40%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const SignUpError = styled.div`
  color: #f0f2ae;
  margin-bottom: 10px;
  padding-left: 15px;
`;

export const SignUpInput = styled.input`
  width: 90%;
  border: 1px solid #fdf5ec;
  border-radius: 16px;
  background-color: #8c775e;
  color: #fdf5ec;
  line-height: 40px;
  padding: 2%;
  margin-bottom: 4%;
  ::placeholder {
    color: #fdf5ec;
  }
`;

export const SignUpBtn = styled.button`
  width: 90%;
  height: 10vh;
  background-color: ${(props: IPropsIsActive) =>
    props.isActive ? " #fdf5ec" : " #8C775E"};
  color: ${(props: IPropsIsActive) =>
    props.isActive ? " #8C775E" : " #fdf5ec"};
  text-align: center;
  border-radius: 16px;
  border: 1px solid #fdf5ec;
  cursor: pointer;
`;
