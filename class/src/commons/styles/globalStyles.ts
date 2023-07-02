import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0;
    box-sizing: border-box;
    font-family: "SUIT";
  }

  button {
    border: none;
    width: 15%;
    height: 50px;
    border-radius: 20px;
    cursor: pointer;
  }

  @font-face {
    font-family: "SUIT";
    src: url(/fonts/SUIT-Regular.ttf);
  }
`;
