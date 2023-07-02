import styled from "@emotion/styled";

interface IPropsActive {
  isActive: Boolean;
}

export const BodyHTML = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
  color: #fff;
`;

export const Wrapper = styled.div`
  width: 40%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const LoginError = styled.div`
  color: red;
`;

export const CheckDiv = styled.div`
  padding: 2%;
`;

export const LoginInput = styled.input`
  width: 90%;
  border: 1px solid #bdbdbd;
  border-radius: 16px;
  background-color: black;
  line-height: 40px;
  padding: 2%;
  margin-bottom: 4%;
`;

export const LoginBtn = styled.button`
  width: 90%;
  height: 10vh;
  background-color: ${(props: IPropsActive) =>
    props.isActive ? "crimson" : "gray"};
  color: black;
  text-align: center;
  border-radius: 16px;
  border: none;
  cursor: pointer;
`;
