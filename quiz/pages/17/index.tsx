import { useState, ChangeEvent, useRef } from 'react';
import { gql, useMutation } from '@apollo/client';
import { IMutation, IMutationUploadFileArgs } from '../../../../quiz/src/commons/types/generated/types';
import { Modal } from 'antd';
import styled from '@emotion/styled'
import {LikeOutlined} from  '@ant-design/icons'



const CREATE_BOARD = gql`
    mutation createMutation($createBoardInput: CreateBoardInput!){
        createBoard(createBoardInput: $createBoardInput){
            _id
            writer
            title
            contents
            images
        }
    }

`

const UPLOAD_FILE = gql`
    mutation uploadMutation($file: Upload!){
        uploadFile(file: $file){
            url
        }
    }
`


const LikeIcon = styled(LikeOutlined)`
font-size: 50px;
color: purple;
width: "10vw";
height:"10vh";
cursor:"pointer";
margin: 10px;
`



export default function ImageUploadQuizPage(){
    const fileRef = useRef<HTMLInputElement>(null)

    const [createBoard] = useMutation(CREATE_BOARD);
    const [uploadFile] = useMutation<Pick<IMutation,"uploadFile">, IMutationUploadFileArgs>(UPLOAD_FILE);

    const [writer, setWriter] = useState("");
    const [password, setPassword] = useState("");
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");
    const [imageUrl, setImageUrl] = useState<string | undefined>("")



    const onClickCreateBoard = async() => {

        const result1 = await createBoard({
             variables:{
                createBoardInput:{
                    writer,
                    password,
                    title,
                    contents,
                    images:[imageUrl]
                }
             }
         })
         console.log(result1)
    }





    const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
        setWriter(event.target.value)
    }

    const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }

    const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
        setContents(event.target.value)
    }


    const onChangeImageFile = async (event: ChangeEvent<HTMLInputElement>) => {
    
        const file = event.target.files?.[0];

        try{
            const result = await uploadFile({ variables: {file}})
            // console.log("결과",result.data?.uploadFile.url)
            setImageUrl(result.data?.uploadFile.url)
        }catch(error: any){
            Modal.error({content: error.message})
        }
    }



    const onClickImageFile = () => {
        
        fileRef.current?.click();
    }






    return (

        <div>
            작성자 : <input type="text" onChange={onChangeWriter}/><br />
            비밀번호 :<input type="text" onChange={onChangePassword} /><br />
            제목 :<input type="text" onChange={onChangeTitle} /><br />
            내용 :<input type="text" onChange={onChangeContents}  /><br />

            <button  onClick={onClickCreateBoard} style={{cursor:"pointer"}}> 저장하기 </button>


            <div>

                <LikeIcon onClick={onClickImageFile} /> 
                <input style={{display: "none"}} type="file" onChange={onChangeImageFile} ref={fileRef} />
                <img src={`https://storage.googleapis.com/${imageUrl}`} />
            </div>
        </div>
    )
}