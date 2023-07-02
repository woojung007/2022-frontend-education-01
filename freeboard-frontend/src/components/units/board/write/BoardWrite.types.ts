import { ChangeEvent } from "react";

export interface IBoardWriteProps {
  isEdit: boolean;
  data?: any;
  boardId?: any;
}

export interface IUpdateVariables {
  boardId: any;
  writer?: string;
  title?: string;
  content?: string;
  youtubeUrl?: string;
  images?: any;
  boardAddress?: {
    zipcode?: string;
    address?: string;
    addressDetail?: string;
  };
  data?: any;
}

export interface ICreateBoardInput {
  createBoardInput: object;
  password?: string;
}

export interface IBoardWriteUIProps {
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;

  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeYoutubeUrl: (event: ChangeEvent<HTMLInputElement>) => void;
  callGraphqlAPI: () => void;

  onClickUpdate: () => void;
  writerError: string;
  passwordError: string;
  titleError: string;
  contentError: string;
  isActive: boolean;
  isEdit: boolean;
  data?: any;
  showModal: () => void;
  handleOk: () => void;
  handleCancel: () => void;
  handleComplete: any;
  isOpen: boolean;
  zipcode: any;
  address: string;
  addressDetail: string;
  imageUpload?: string[];
  onChangeFileUrl: (fileUrl: any, index: number) => void;
}

export interface IRegisterBtnProps {
  isActive: boolean;
}
