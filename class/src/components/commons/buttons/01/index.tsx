import styled from "@emotion/styled";

interface IButton01 {
  isActive: boolean;
  title: string;
}

interface IPropsBtn {
  isActive: boolean;
}

const Button = styled.button`
  background-color: ${(props: IPropsBtn) => (props.isActive ? "yellow" : "")};
`;

export default function Button01(props: IButton01) {
  return <Button isActive={props.isActive}>{props.title}</Button>;
}
