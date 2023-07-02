import { useForm } from "react-hook-form"
import { Modal } from 'antd';
import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from './signup.queries';
import * as S from './signup.style'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from "yup"
import { ClickSpan } from './signup.style';



interface IFormValues{
    name?:string
    email?:string
    password?:string
    passwordCheck?:string
}   



const schema = yup.object({
    email:yup
    .string()
    .email("이메일 형식이 적합하지 않습니다")
    .required("이메일은 필수 입력 사항입니다"),
    
    name:yup
    .string()
    .max(5, "작성자는 5글자 이내여야 합니다")
    .required("이름은 필수 입력사항입니다"),

    password:yup
    .string()
    .matches( 
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%#?&])[A-Za-z\d$@$!%*#?&]{1,8}$/,
        "비밀번호는 영문, 숫자, 특수문자를 포함한 8자리 이내 문자열이어야 합니다")
    .required("비밀번호는 필수 입력 사항입니다"),

    passwordCheck:yup
    .string()
    .oneOf([yup.ref('password'),null], "비밀번호가 일치하지 않습니다.")
    .required("비밀번호는 필수 입력 사항입니다")
})



export default function SignUpContainer(){
    const router = useRouter()
    const {register, handleSubmit, formState} = useForm({
        resolver: yupResolver(schema),
        mode: "onChange"
    });
    const [createUser] = useMutation(CREATE_USER);


    const onClickSignUp = async (data: IFormValues) => {
        try{
        console.log(data)
        const result = await createUser({
            variables:{
                createUserInput:{
                    email: data.email,
                    name: data.name,
                    password: data.password
                }
            }
        })
        console.log(result)
        Modal.success({content: "회원가입이 완료되었습니다!"});
        router.push("/user/login")
    }catch(error){
        if (error instanceof Error) Modal.error({content:error.message});
    }
    }


    const moveToLogIn = () =>{
        router.push("/market/user/login")
    }


    return (
        <S.LoginWrapper>
            <S.BodyHTML>
                <S.Header>
                    <S.Logo>
                    <img src="/logo-white.png" style={{width:300}}/>
                    </S.Logo>
                </S.Header>

                <S.Wrapper>
                <S.LoginDiv>
                    <S.LoginKR>회원가입</S.LoginKR>
                    <S.LoginENG>Sign up</S.LoginENG>
                </S.LoginDiv>
        
                <form onSubmit={handleSubmit(onClickSignUp)}>
                    <S.FormWrapper>
                            <S.InputDiv>
                                <S.Title>아이디</S.Title>
                                <S.ErrorDiv>
                                <S.LoginInput {...register("email")} type="text"  placeholder='이메일 아이디를 @까지 정확하게 입력하세요.' />
                                <S.SignUpError>{formState.errors.email?.message}</S.SignUpError>
                                </S.ErrorDiv>

                            </S.InputDiv>
             
                            <S.InputDiv>
                                <S.Title>비밀번호</S.Title>
                                <S.ErrorDiv>
                                <S.LoginInput {...register("password")} type="password"  placeholder='영문+숫자 조합 8~16자리를 입력해주세요.' />
                                <S.SignUpError>{formState.errors.password?.message}</S.SignUpError>
                                </S.ErrorDiv>
                            </S.InputDiv>

                            <S.InputDiv>
                                <S.Title>비밀번호 확인</S.Title>
                                <S.ErrorDiv>
                                <S.LoginInput {...register("passwordCheck")}  type="password"  placeholder='영문+숫자 조합 8~16자리를 입력해주세요.' />
                                <S.SignUpError>{formState.errors.passwordCheck?.message}</S.SignUpError>
                                </S.ErrorDiv>
                            </S.InputDiv>
                            <S.InputDiv>
                                <S.Title>이름</S.Title>
                                <S.ErrorDiv>
                                <S.LoginInput {...register("name")}  type="text"  placeholder='Ex) 홍길동' />
                                <S.SignUpError>{formState.errors.name?.message}</S.SignUpError>
                                </S.ErrorDiv>
                            </S.InputDiv>

                        </S.FormWrapper>
                        <S.ButtonWrapper>
                            <S.SignUpBtn isActive={formState.isValid} >회원가입하기</S.SignUpBtn>
                            <S.CancelButton>취소</S.CancelButton>
                        </S.ButtonWrapper>

                        <S.StringDiv>
                            <span>이미 아이디가 있으신가요?</span>
                            <ClickSpan onClick={moveToLogIn}>로그인</ClickSpan>
                        </S.StringDiv>
             
                </form>
                </S.Wrapper>
            </S.BodyHTML>
        </S.LoginWrapper>
    )
}