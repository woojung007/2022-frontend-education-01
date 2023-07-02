import { ISignUpPresenter } from './signup.types';
import styled from '@emotion/styled';



const BodyHTML = styled.div`
        width: 100%;
    height: 100vh;
    background-color: black;
    color: #fff;
`

const Wrapper = styled.div`
width: 40%;
margin: 0 auto;
/* background-color: gray; */
display: flex;
flex-direction: column;
`


const SignUpError = styled.div`
    color: red;
`


const SignUpInput = styled.input`
    width: 90%;
    border: 1px solid #bdbdbd;
    border-radius: 16px;
    background-color: black;
    line-height: 40px;
    padding: 2%;
    margin-bottom: 4%;
`

const SignUpBtn = styled.button`
    width: 90%;
    height: 10vh;
    background-color: gray;
    color: black;
    text-align:center;
    border-radius: 16px;
    border: none;
`


export default function SignUpPresenter(props:ISignUpPresenter){



    return (
        <BodyHTML>
            <Wrapper>
                이메일<br />
                <SignUpInput onChange={props.onChangeEmail}  type="text"  placeholder='이메일을 입력해주세요.' />
                <SignUpError>{props.emailError}</SignUpError>
                이름<br />
                <SignUpInput onChange={props.onChangeName}  type="text"  placeholder='이름을 입력해주세요.' />
                <SignUpError>{props.nameError}</SignUpError>
                비밀번호<br />
                <SignUpInput onChange={props.onChangePassword}  type="text"  placeholder='비밀번호를 입력해주세요.' />
                <SignUpError>{props.passwordError}</SignUpError>
                비밀번호 확인<br />
                <SignUpInput onChange={props.onChangePassword1}  type="text"  placeholder='비밀번호를 다시 입력해주세요.' />
                <SignUpError>{props.password1Error}</SignUpError>
                
                <SignUpBtn onClick={props.onClickSignUp}>회원가입하기</SignUpBtn>

                <div></div>
            </Wrapper>
        </BodyHTML>
    )
}