import styled from '@emotion/styled';


interface IPropsIsActive{
    isActive : boolean
}


export const LoginWrapper = styled.div`
    width: 100%;
    background: #F8F8F8;
    height: auto;
`

export const BodyHTML = styled.div`
    width: 100%;
   padding-bottom: 140px;
`
export const Header = styled.div`
    width: 100%;
    height: 100px;
    background-color: #000;
    padding-left: 100px;
    padding-top: 30px;
`

export const Logo = styled.div`
`


export const Wrapper = styled.div`
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

export const LoginDiv = styled.div`
    display: flex;
    align-items:flex-end;
    border-bottom: 1px solid #C9C9C9;

`

export const LoginKR = styled.div`
    font-weight: 700;
font-size: 50px;
`
export const LoginENG = styled.div`
    font-weight: 400;
font-size: 32px;
padding-bottom: 10px;
padding-left: 12px;
`


export const Title = styled.div`
font-weight: 400;
font-size: 24px;
width: 150px;
padding-top: 50px;

`

export const FormWrapper = styled.div`
display: flex;
flex-direction: column;
padding-bottom: 80px;
`
export const InputDiv = styled.div`
display: flex;
justify-content: space-between;

`

export const SignUpError = styled.div`
    color: #EF3030;
    padding-top: 10px;
    width:100%;
`


export const ButtonWrapper = styled.div`
width: 100%;
display: flex;
justify-content: center;
padding-bottom: 40px;
`
export const SignUpBtn = styled.button`
    width: 280px;
    height: 70px;
    background-color: ${(props: IPropsIsActive)=> (props.isActive ? "#FFE004": "gray" )};
    color: black;
    text-align:center;
    border: none;
    font-weight: 500;
font-size: 20px;
margin-right: 20px;
`

export const CancelButton = styled.button`
width: 280px;
height: 70px;
background: #000000;
font-weight: 500;
font-size: 20px;
color: #FFFFFF;
border: none;
`
export const LoginInput = styled.input`
    width: 100%;
    height: 77px;
    border: 1px solid #bdbdbd;
    border-radius: 16px;
    line-height: 40px;
    margin-top: 40px;
    background: #F6F6F6;
border: 1px solid #CCCCCC;
box-sizing: border-box;
border-radius: 10px;
padding-left: 30px;
`


export const StringDiv = styled.div`
    width: 100%;
    text-align: center;
    padding-right: 20px;
    color:#888;
`

export const ClickSpan = styled.span`
    font-weight: bold;
    text-decoration: underline;
    padding-left: 20px;
    color: #000;
    cursor:pointer;
`

export const ErrorDiv  = styled.div`
width: 70%;
display: flex;
flex-direction:column;
`