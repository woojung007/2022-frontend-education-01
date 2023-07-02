import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styled from "@emotion/styled";

interface IPropsIsActive {
  isActive: boolean;
}

const Errors = styled.div`
  color: red;
  font-size: 11px;
`;

const LoginBtn = styled.button`
  background-color: ${(props: IPropsIsActive) =>
    props.isActive ? "yellow" : ""};
`;

const schema = yup.object({
  email: yup
    .string()
    .email("이메일 형식이 적합하지 않습니다")
    .required("이메일은 필수 입력 사항입니다"),
  password: yup
    .string()
    .min(4, "비밀번호는 최소 4자리 이상 입력해 주세요 ")
    .max(15, "비밀번호는 최대 15자리로 입력해 주세요")
    .required("비밀번호는 필수 입력 사항입니다"),
});

interface IFormValues {
  email?: string;
  password?: string;
}

export default function ReactHookFormPage() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSubmit = (data: IFormValues) => {
    console.log(data);
    alert("로그인되었습니다");
  };

  console.log("리렌더링 체크!!!");

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      email: <input type="text" {...register("email")} />
      <Errors>{formState.errors.email?.message}</Errors>
      password: <input type="text" {...register("password")} />
      <Errors>{formState.errors.password?.message}</Errors>
      <LoginBtn isActive={formState.isValid}>login</LoginBtn>
    </form>
  );
}
