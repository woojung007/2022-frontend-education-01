import { Modal } from "antd";
import { useApolloClient, useMutation } from "@apollo/client";
import { LOGIN_USER, FETCH_USER_LOGGED_IN } from "./login.queries";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { accessTokenState } from "../../commons/store/index";
import * as S from "./login.styles";

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

  password: yup
    .string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%#?&])[A-Za-z\d$@$!%*#?&]{1,8}$/,
      "비밀번호는 영문, 숫자, 특수문자를 포함한 8자리 이내 문자열이어야 합니다"
    )
    .required("비밀번호는 필수 입력 사항입니다"),
});

export default function LoginContainer() {
  const router = useRouter();
  const client = useApolloClient();
  const [loginUser] = useMutation(LOGIN_USER);
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const { register, handleSubmit, formState } = useForm<IFormValues>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const LogInUser = async (data: IFormValues) => {
    try {
      const result = await loginUser({
        variables: { ...data },
      });
      const accessToken = result.data.loginUser.accessToken;
      console.log(accessToken);

      const resultUserInfo = await client.query({
        query: FETCH_USER_LOGGED_IN,
        context: {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      });

      const userInfo = resultUserInfo.data.fetchUserLoggedIn;
      console.log(userInfo);
      setAccessToken(accessToken);

      Modal.success({ content: "로그인 되었습니다" });
      router.push("/user/myPage");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const moveToSignUp = () => {
    router.push("/user/signup");
  };

  return (
    <S.BodyHTML>
      <S.Wrapper>
        <form onSubmit={handleSubmit(LogInUser)}>
          <S.LoginInput
            {...register("email")}
            type="text"
            placeholder="이메일을 입력해주세요."
          />
          <S.LoginError>{formState.errors.email?.message}</S.LoginError>
          <S.LoginInput
            {...register("password")}
            type="password"
            placeholder="비밀번호를 입력해주세요."
          />
          <S.LoginError>{formState.errors.password?.message}</S.LoginError>

          <S.CheckDiv>
            <input type="radio" defaultChecked style={{ marginRight: 15 }} />
            <S.TextSpan>로그인 상태 유지</S.TextSpan>
          </S.CheckDiv>

          <div></div>

          <S.LoginWrapper>
            <S.TextSpan>이메일 찾기</S.TextSpan>|
            <S.TextSpan>비밀번호 찾기</S.TextSpan>|
            <S.TextSpan onClick={moveToSignUp}>회원가입</S.TextSpan>
          </S.LoginWrapper>

          <S.LoginBtn isActive={formState.isValid}>로그인하기</S.LoginBtn>
        </form>
      </S.Wrapper>
    </S.BodyHTML>
  );
}
