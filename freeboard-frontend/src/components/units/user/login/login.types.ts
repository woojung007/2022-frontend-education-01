import { ChangeEvent, KeyboardEvent } from "react";

export interface ILoginPresenter {
  onChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickLogIn: () => void;
  keyPressLogin: (event: KeyboardEvent<HTMLInputElement>) => void;
  emailError: string;
  passwordError: string;
  idRef: any;
  passwordRef: any;
  isActive: Boolean;
}
