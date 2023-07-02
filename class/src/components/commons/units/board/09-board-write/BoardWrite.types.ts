// typescript file
import { ChangeEvent } from "react";

// container
export interface IBoardWriteProps {
  isEdit: boolean;
  data?: any;
}

export interface IMyVariables {
  number: number;
  writer?: string;
  title?: string;
  contents?: string;
}

// presenter
export interface IBoardWriteUIProps {
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLInputElement>) => void;
  callGraphqlAPI: () => void;
  onClickUpdate: () => void;
  isActive: boolean;
  isEdit: boolean;
  data?: any;
}

// style
export interface ISubmitButtonProps {
  isActive: boolean;
}
