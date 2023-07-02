import styled from "@emotion/styled"
import {useForm} from "react-hook-form"
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import ExampleInput from '../../../src/components/commons/inputs/01-example/index';
import ExampleButton from '../../../src/components/commons/buttons/01-example/index';


const schema = yup.object({
    writer: yup
    .string()
    .max(5, "작성자는 5글자 이내여야 합니다")
    .required("이름은 필수 입력사항입니다"),

    password:yup
    .string()
    .matches( 
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%#?&])[A-Za-z\d$@$!%*#?&]{1,8}$/,
        "비밀번호는 영문, 숫자, 특수문자를 포함한 8자리 이내 문자열이어야 합니다")
    .required("비밀번호는 필수 입력 사항입니다"),

    title:yup
    .string()
    .max(100,"제목은 최대 100자 이내로 입력해주세요")
    .required("제목을 입력해주세요"),

    contents:yup  
    .string()
    .max(100,"내용은 최대 1000자 이내로 입력해주세요")
    .required("내용을 입력해주세요") 
})

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

export default function QuizReactHookForm(){
 const {register, handleSubmit, formState} = useForm({
     resolver: yupResolver(schema),
     mode: "onChange"
 });

 const onSubmit = (data: IFormValues) =>{
    console.log(data)
    alert("게시물이 등록되었습니다")
}

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            작성자: <ExampleInput type="text" register={register("writer")}/>
            <Errors>{formState.errors.writer?.message}</Errors>

            비밀번호: <ExampleInput type="password" register={register("password")} />
            <Errors>{formState.errors.password?.message}</Errors>

            제목: <ExampleInput type="text" register={register("title")}/>
            <Errors>{formState.errors.title?.message}</Errors>

            내용: <ExampleInput type="text" register={register("contents")}/>
            <Errors>{formState.errors.contents?.message}</Errors>

            <ExampleButton title={"게시물 등록하기"}></ExampleButton>
        </form>
    )
}