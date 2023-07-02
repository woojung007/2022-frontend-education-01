import styled from "@emotion/styled";

const Button = styled.button``;

interface IButton {
  title: string;
}

export default function ExampleButton(props: IButton) {
  return <Button>{props.title}</Button>;
}
