import { ChangeEvent, useState, useRef } from 'react';
import {useMutation, gql} from '@apollo/client'
import { IMutation, IMutationUploadFileArgs } from '../../../quiz/src/commons/types/generated/types';
import { checkFileValidation } from '../../src/commons/libraries/validation';
import { Modal } from 'antd';

const CREATE_BOARD = gql`
    mutation myMutation ($createBoardInput: CreateBoardInput!) {
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
    mutation uploadFile($file: Upload!){
        uploadFile(file: $file){
            url
        }
    }

`

export default function GraphqlMutationPage(){
    const fileRef = useRef<HTMLInputElement>(null);
    const [imageUrl, setImageUrl] = useState<string | undefined>("");

    
    // mutation 실제로 사용하기 위해서 
    const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
    >(UPLOAD_FILE)

    const [myWriter, setMyWriter] = useState("")
    const [myPassword, setMyPassword] = useState("")
    const [myTitle, setMyTitle ] = useState("")
    const [myContents, setMyContents ] = useState("")

    const [callAPI] = useMutation(CREATE_BOARD)

    const callGraphqlAPI = async () => {
        const result = await callAPI({
            variables: { 
                createBoardInput:{
                    writer:myWriter,
                    password:myPassword,
                    title:myTitle,
                    contents:myContents,
                    images: [imageUrl]
            }}
        }) 
        console.log(result)

    }
    const onChangeWriter = (event:any) => {
        setMyWriter(event.target.value) 
    }

    const onChangePassword = (event:any) => {
        setMyPassword(event.target.value) 
    }

    const onChangeTitle = (event:any) => {
        setMyTitle(event.target.value)
    }

    const onChangeContents = (event:any) => {
        setMyContents(event.target.value)
    }



        const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) =>{

        const file = event.target.files?.[0];
        console.log(file)

        const isValid = checkFileValidation(file);
        if(!isValid) return;


        try{
            const result = await uploadFile({ variables:{ file }})
            console.log(result.data?.uploadFile.url) 
    
            setImageUrl(result.data?.uploadFile.url)

        }catch(error:any){
            Modal.error({content: error.message})
        }
    }


    const onClickImage = () => {
        fileRef.current?.click();
        console.log("click!!!!")
    }





    return (
        <div>  
            작성자 : <input type = "text"  onChange={onChangeWriter} /><br  />
            비밀번호 : <input type = "text"  onChange={onChangePassword} /><br  />
            제목 :  <input type = "text"  onChange={onChangeTitle}/><br  />
            내용 :  <input type = "text" onChange={onChangeContents} /><br  />
            <button onClick={callGraphqlAPI}>GRAPHQL-API 요청하기</button>


            <div>
            <div>이미지 업로드 연습하기</div>
            <div style={{width: "150px", height: "150px", backgroundColor : "gray"}} onClick={onClickImage}>
                이미지선택
            </div>
            <input style={{display: "none"}} type="file" onChange={onChangeFile} ref={fileRef}/>
            <img src={`https://storage.googleapis.com/${imageUrl}`}/>
            </div>
        </div>

        
    )
}