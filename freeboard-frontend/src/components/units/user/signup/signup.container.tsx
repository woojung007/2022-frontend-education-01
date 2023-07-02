import { useState, ChangeEvent } from "react";
import { Modal } from "antd";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "./signup.queries";
import { useRouter } from "next/router";
import SignUpPresenter from "./singup.presenter";

export default function SignUpContainer() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");

  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [password1Error, setPassword1Error] = useState("");

  const [createUser] = useMutation(CREATE_USER);

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    if (!/^\w+@\w+\.[a-zA-Z]{2,3}$/.test(event.target.value)) {
      setEmailError("이메일은 필수 입력입니다.");
    } else {
      setEmailError("");
    }
  };

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    if (!/^\w[ㄱ-ㅎ가-힣]{2,3}$/.test(event.target.value)) {
      setNameError("이름은 필수 입력입니다.");
    } else {
      setNameError("");
    }
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    if (!/^\w[a-zA-Z0-9]{7,16}$/.test(event.target.value)) {
      setPasswordError("비밀번호는 필수 입력입니다.");
    } else {
      setPasswordError("");
    }
  };

  const onChangePassword1 = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword1(event.target.value);
    if (!/^\w[a-zA-Z0-9]{7,16}$/.test(event.target.value)) {
      setPassword1Error("비밀번호는 필수 입력입니다.");
    } else {
      setPassword1Error("");
    }
  };

  const onClickSignUp = async () => {
    if (password !== password1) {
      setPasswordError("비밀번호가 다릅니다.");
      setPassword1Error("비밀번호가 다릅니다.");
    } else {
      setPasswordError("");
    }

    try {
      await createUser({
        variables: {
          createUserInput: {
            email,
            password,
            name,
          },
        },
      });
      Modal.success({ content: "회원가입이 되었습니다." });
      router.push("./");
    } catch (error) {}
  };

  return (
    <SignUpPresenter
      onChangeEmail={onChangeEmail}
      onChangeName={onChangeName}
      onChangePassword={onChangePassword}
      onChangePassword1={onChangePassword1}
      onClickSignUp={onClickSignUp}
      emailError={emailError}
      nameError={nameError}
      passwordError={passwordError}
      password1Error={password1Error}
    />
  );
}
