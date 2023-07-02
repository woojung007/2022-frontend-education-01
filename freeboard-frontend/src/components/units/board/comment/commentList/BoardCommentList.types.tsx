import { ChangeEvent } from "react";

export interface ICommentListUIProps {
  data?: any;
  id?: any;
  onClickDeleteComment: () => void;
  showModal: any;
  handleCancel: () => void;
  isOpen: boolean;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onLoadMore: () => void;
}
