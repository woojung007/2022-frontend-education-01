import { Modal } from 'antd';
import { useApolloClient, useMutation,gql } from '@apollo/client';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from "yup"
import { accessTokenState } from '../../../../src/components/commons/store/index';

const LOGIN_USER = gql`
    mutation loginUser($email: String!, $password: String!){
      loginUser(email: $email, password: $password){
        accessToken
      }
    }
`

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn{
    fetchUserLoggedIn{
      email
      name
      userPoint{amount}
    }
  }
`

interface IPropsIsActive{
    isActive : boolean
}

const LoginWrapper = styled.div`
    width: 100%;
    background: #F8F8F8;
    height: auto;
`

const BodyHTML = styled.div`
    width: 100%;
   padding-bottom: 193px;
`
const Header = styled.div`
    width: 100%;
    height: 100px;
    background-color: #000;
    padding-left: 100px;
    padding-top: 30px;
`

const Logo = styled.div`
    width:300px;
`
const Wrapper = styled.div`
width: 742px;
display: flex;
flex-direction: column;
margin: 0 auto;
background: #FFFFFF;
box-shadow: 0px 5px 7px rgba(0, 0, 0, 0.07);
border-radius: 10px;
margin: 193px auto;
padding: 70px;


`

const LoginDiv = styled.div`
    display: flex;
    align-items:flex-end;
    border-bottom: 1px solid #C9C9C9;

`

const LoginKR = styled.div`
    font-weight: 700;
font-size: 50px;
`
const LoginENG = styled.div`
    font-weight: 400;
font-size: 32px;
padding-bottom: 10px;
padding-left: 12px;
`

const LoginError = styled.div`
    color: #EF3030;
    padding-top: 15px;
`

const LoginInput = styled.input`
    width: 100%;
    height: 77px;
    border: 1px solid #bdbdbd;
    border-radius: 16px;
    line-height: 40px;
    margin-top: 80px;
    background: #F6F6F6;
border: 1px solid #CCCCCC;
box-sizing: border-box;
border-radius: 10px;
padding-left: 30px;

`

const LoginBtn = styled.button`
    width: 100%;
    height: 88px;
    background-color: ${(props: IPropsIsActive)=> (props.isActive ? "#FFE004": "gray" )};
    color: black;
    text-align:center;
    border-radius: 16px;
    border: none;
    margin: 114px 0 40px 0;

`
const StringDiv = styled.div`
    width: 100%;
    text-align: center;
    padding-right: 20px;
    color:#888;
`

const ClickSpan = styled.span`
    font-weight: bold;
    text-decoration: underline;
    padding-left: 20px;
    color: #000;
    cursor:pointer;
`


const schema = yup.object({
    email: yup
    .string()
    .email("이메일 아이디를 @까지 정확하게 입력해주세요. ")
    .required("이메일은 필수 입력 사항입니다"),
    
    password:yup
    .string()
    .matches( 
        /^[A-Za-z0-9]{8,16}$/,
        "영문+숫자 조합 8~16자리의 비밀번호를 입력해주세요.")
    .required("비밀번호는 필수 입력 사항입니다"),
})



export default function LoginContainer(){
const router = useRouter();
const client = useApolloClient();
const [loginUser] = useMutation(LOGIN_USER);
const [, setAccessToken] = useRecoilState(accessTokenState);
const {register, handleSubmit, formState} = useForm({
    resolver: yupResolver(schema),
    mode: "onChange"
});


const LogInUser = async (data:any) => {
try{
    const result = await loginUser({
        variables: {...data}
    });
    const accessToken = result.data.loginUser.accessToken;
    console.log(accessToken);

    await client.query({
        query: FETCH_USER_LOGGED_IN,
        context:{
            headers:{
                Authorization: `Bearer ${accessToken}`,
            },
    }
    });

    setAccessToken(accessToken);
    Modal.success({content: "로그인 되었습니다"})
    router.push("/")

}catch(error){
    if (error instanceof Error) Modal.error({content:error.message});

}
}

const moveToSignUp = () =>{
    router.push("/market/user/signUp")
}
    return (
    <LoginWrapper>
        <BodyHTML>
            <Header>
                <Logo>
                    <img src="/logo-white.png" style={{width:300}}/>
                </Logo>
            </Header>
            <Wrapper>
                <LoginDiv>
                    <LoginKR>로그인</LoginKR>
                    <LoginENG>Login</LoginENG>
                </LoginDiv>
                <form onSubmit={handleSubmit(LogInUser)}>
                <LoginInput  {...register("email")} type="text"  placeholder='아이디' />
                <LoginError>{formState.errors.email?.message}</LoginError>
                <LoginInput  {...register("password")} type="password"  placeholder='비밀번호' />
                <LoginError>{formState.errors.password?.message}</LoginError>


                <LoginBtn isActive={formState.isValid}>로그인</LoginBtn>

                <StringDiv>
                    <span>아직 계정이 없으신가요?</span>
                    <ClickSpan onClick={moveToSignUp}>회원가입</ClickSpan>
                </StringDiv>
                </form>
            </Wrapper>
        </BodyHTML>
    </LoginWrapper>
    )
}