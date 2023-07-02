import { ChangeEvent } from "react";

export interface IUpdateUseditemInput {
  name?: string;
  remarks?: string;
  contents?: string;
  price?: number;
  tags?: [string];
  images?: string[];
  useditemAddress?: {
    zipcode?: string;
    address?: string;
    addressDetail?: string;
  };
}

export interface IUsedItemWritePresenter {
  isEdit: boolean;
  onClickUpdate: (data: any) => void;
  onClickSubmit: (data: any) => Promise<void>;
  onChangeFileUrl: (fileUrl: string, index: number) => void;
  onChangeContents: (value: any) => void;
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  data?: any;
  images?: string[];
  register: any;
  handleSubmit: any;
  formState: any;
  getValues: any;
  onKeyUpHash: (event: any) => void;
  onClickTagDelete: (event: any) => void;
  hashArr: string[];
  showModal: () => void;
  handleOk: () => void;
  handleCancel: () => void;
  handleComplete: any;
  isOpen: boolean;
  zipcode: any;
  address: string;
  addressDetail: string;
}
