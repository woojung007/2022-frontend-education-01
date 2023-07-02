import styled from "@emotion/styled"
import {useForm} from "react-hook-form"
import { useState } from 'react';




interface IFormValues{
    writer?: string
    password?: string
    title?: string
    contents?: string
}

const Errors = styled.div`
color: red;
font-size:11px;
`

const LoginBtn = styled.button`
`

export default function QuizReactHookForm(){
 const {register, handleSubmit} = useForm();

 const [writerError, setWriterError] = useState("")
 const [passwordError, setPasswordError] = useState("")
 const [titleError, setTitleError] = useState("")
 const [contentsError, setContentsError] = useState("")
 
 const onSubmit = (data: IFormValues) =>{
    
    if(!data.writer){
        setWriterError("작성자를 입력해주세요")
    }
    if(!data.password){
        setPasswordError("비밀번호를 입력해주세요")
    }
    if(!data.title){
        setTitleError("제목을 입력해주세요")
    }
    if(!data.contents){
        setContentsError("내용을 입력해주세요")
    }
    else if(data.writer && data.password && data.title && data.contents){
        alert("게시물이 등록되었습니다")
    }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            작성자: <input type="text" {...register("writer")}/>
            <Errors>{writerError}</Errors>
            비밀번호: <input type="text" {...register("password")}/>
            <Errors>{passwordError}</Errors>
            제목: <input type="text" {...register("title")}/>
            <Errors>{titleError}</Errors>
            내용: <input type="text" {...register("contents")} />
            <Errors>{contentsError}</Errors>

            <LoginBtn >게시물 등록하기</LoginBtn>
        </form>
    )
}