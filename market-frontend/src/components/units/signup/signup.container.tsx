import { useForm } from "react-hook-form";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "./signup.queries";
import * as S from "./signup.style";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface IFormValues {
  name?: string;
  email?: string;
  password?: string;
  passwordCheck?: string;
}

const schema = yup.object({
  email: yup
    .string()
    .email("이메일 형식이 적합하지 않습니다")
    .required("이메일은 필수 입력 사항입니다"),

  name: yup
    .string()
    .max(5, "작성자는 5글자 이내여야 합니다")
    .required("이름은 필수 입력사항입니다"),

  password: yup
    .string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%#?&])[A-Za-z\d$@$!%*#?&]{1,8}$/,
      "비밀번호는 영문, 숫자, 특수문자를 포함한 8자리 이내 문자열이어야 합니다"
    )
    .required("비밀번호는 필수 입력 사항입니다"),

  passwordCheck: yup
    .string()
    .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다.")
    .required("비밀번호는 필수 입력 사항입니다"),
});

export default function SignUpContainer() {
  const router = useRouter();
  const { register, handleSubmit, formState } = useForm<IFormValues>({
    resolver: yupResolver(schema), // react-hook-form이랑 yup을 연결
    mode: "onChange", // 입력하면 바로 에러가 실행되게 설정
  });
  const [createUser] = useMutation(CREATE_USER);

  const onClickSignUp = async (data: IFormValues) => {
    try {
      console.log(data);
      const result = await createUser({
        variables: {
          createUserInput: {
            email: data.email,
            name: data.name,
            password: data.password,
          },
        },
      });
      console.log(result);
      Modal.success({ content: "회원가입이 완료되었습니다!" });
      router.push("/user/login");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <S.BodyHTML>
      <S.Wrapper>
        <form onSubmit={handleSubmit(onClickSignUp)}>
          <S.SignUpInput
            {...register("name")}
            type="text"
            placeholder="이름을 입력해주세요."
          />
          <S.SignUpError>{formState.errors.name?.message}</S.SignUpError>
          <S.SignUpInput
            {...register("email")}
            type="text"
            placeholder="이메일을 입력해주세요."
          />
          <S.SignUpError>{formState.errors.email?.message}</S.SignUpError>
          <S.SignUpInput
            {...register("password")}
            type="password"
            placeholder="비밀번호를 입력해주세요."
          />
          <S.SignUpError>{formState.errors.password?.message}</S.SignUpError>
          <S.SignUpInput
            {...register("passwordCheck")}
            type="password"
            placeholder="비밀번호를 다시 입력해주세요."
          />
          <S.SignUpError>
            {formState.errors.passwordCheck?.message}
          </S.SignUpError>

          <S.SignUpBtn isActive={formState.isValid}>회원가입하기</S.SignUpBtn>
          <div></div>
        </form>
      </S.Wrapper>
    </S.BodyHTML>
  );
}
