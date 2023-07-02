import { ILoginPresenter } from "./login.types";
import * as S from "./login.style";

export default function LoginPresenter(props: ILoginPresenter) {
  return (
    <S.BodyHTML>
      <S.Wrapper>
        <S.LoginInput
          onChange={props.onChangeEmail}
          ref={props.idRef}
          type="text"
          placeholder="이메일을 입력해주세요."
        />
        <S.LoginError>{props.emailError}</S.LoginError>
        <S.LoginInput
          onChange={props.onChangePassword}
          ref={props.passwordRef}
          type="password"
          onKeyUp={props.keyPressLogin}
          placeholder="비밀번호를 입력해주세요."
        />
        <S.LoginError>{props.passwordError}</S.LoginError>

        <S.CheckDiv>
          <input type="radio" />
          <span>로그인 상태 유지</span>
        </S.CheckDiv>

        <S.LoginBtn onClick={props.onClickLogIn} isActive={props.isActive}>
          로그인하기
        </S.LoginBtn>

        <div></div>
      </S.Wrapper>
    </S.BodyHTML>
  );
}
