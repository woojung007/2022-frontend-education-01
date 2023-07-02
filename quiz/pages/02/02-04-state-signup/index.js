import {Wrapper,
        WrapperTitle,
        InputDiv,
        SignUpInput,
        SignUpBtn,
        ErrorDiv
    } from '../../styles/emotion'


import {useState} from 'react';

export default function SignupStatePage() {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [password1,setPassword1] = useState("");

    const [emailError,setEmailError] = useState("");
    const [passwordError,setPasswordError] = useState("");



        const onChangeEmail = (event) => {
            setEmail(event.target.value);
        }

        const onChangePassword = (event) => {
            setPassword(event.target.value);
        }

        const onChangePassword1 = (event) => {
            setPassword(event.target.value);
        }

        function onClickSignup(){
            // 진짜 포장이 잘 됐는지 확인해보기
            console.log(email)
            console.log(password)
            console.log(password1)
    

            if(email.includes("@") === false){
                setEmailError("이메일이 올바르지 않습니다!!");
            }else{
                setEmailError("");
            }

            if(password !== password1){
                setPasswordError("비밀번호가 다릅니다.");
            }else{
                setPasswordError("")
            }

            if(password == "" || password1 == ""){
                setPasswordError("비밀번호를 입력해주세요")
            }else{
                setPasswordError("")
            }

            if(email.includes("@") === true && 
            password === password1){
                alert("회원가입을 축하합니다!!!")
            }
        }

    return(
        <Wrapper>
            <WrapperTitle>
                코드캠프 회원가입
            </WrapperTitle>

            <InputDiv>
                이메일 : <SignUpInput type="text" onChange={onChangeEmail}  placeholder="이메일을 입력해 주세요."/><br />
                <ErrorDiv>{emailError}</ErrorDiv>
                비밀번호: <SignUpInput type="password" onChange={onChangePassword} placeholder="비밀번호를 입력해 주세요." /><br />
                <ErrorDiv>{passwordError}</ErrorDiv>
                비밀번호 확인: <SignUpInput type="password" onChange={onChangePassword1} placeholder="비밀번호를 입력해 주세요."/><br />
                <ErrorDiv>{passwordError}</ErrorDiv>
            </InputDiv>

            <SignUpBtn onClick={onClickSignup}>가입하기</SignUpBtn>

        </Wrapper>
    )

}