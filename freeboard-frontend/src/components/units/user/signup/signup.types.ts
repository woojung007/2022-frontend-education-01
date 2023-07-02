import { ChangeEvent } from 'react';




export interface ISignUpPresenter{
    onChangeEmail: (event:ChangeEvent<HTMLInputElement>) => void
    onChangeName: (event:ChangeEvent<HTMLInputElement>) => void
    onChangePassword: (event:ChangeEvent<HTMLInputElement>) => void
    onChangePassword1: (event:ChangeEvent<HTMLInputElement>) => void
    onClickSignUp:() => void
    emailError: string
    nameError: string
    passwordError: string
    password1Error: string

} 