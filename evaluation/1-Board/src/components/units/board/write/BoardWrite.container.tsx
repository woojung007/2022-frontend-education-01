
import * as S from "./BoardWrite.styles";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client';
import { CREATE_BOARD, UPDATE_BOARD } from './BoardWrite.queries';
import { Modal } from 'antd';
import UploadFilePage from '../../../commons/uploadFile/index';
import { v4 as uuidv4 } from 'uuid';



export default function BoardWritePage(props){
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [imageUpload, setImageUpload] = useState(["","",""])


  const router = useRouter()


  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);



  const onChangeTitle = (event: any) => {
    setTitle(event.target.value);
};

const onChangeContents = (event: any) => {
    setContents(event.target.value);
};

const onChangeWriter = (event: any) => {
    setWriter(event.target.value);
};

const onChangePassword = (event: any) => {
    setPassword(event.target.value);
    // const passwordResult = password;
};

const onClickSubmit = async () => {
    try{
      const result = await createBoard({
        variables:{
          createBoardInput:{
            writer,
            password,
            title,
            contents,
            images:imageUpload,
          }
        }
      })

      console.log(result)
      alert("게시물이 등록되었습니다")
      router.push(`/boards/${result.data?.createBoard._id}`);

    }catch(error:any){
      alert(error.message)
    }

  }



  const onClickUpdate = async () => {

    const currentFile = JSON.stringify(imageUpload)
    const defaultFile = JSON.stringify(props.data?.fetchBoard.images)
    const isChangeFile = currentFile !== defaultFile

    try {
      const updateVariables = {
        boardId: router.query.boardId
      };

      if (writer) updateVariables.writer = writer;
      if (title) updateVariables.title = title;
      if (contents) updateVariables.content = contents;
      if(isChangeFile) updateVariables.images = imageUpload;

      await updateBoard({
        variables: {
          updateBoardInput: {
            title: title,
            contents: contents,
            images:imageUpload
          },
          password: password,
          boardId: String(router.query.boardId),
        },
      });
    
      router.push(`/boards/${router.query.boardId}`);
    } catch(error) {
      if (error instanceof Error) Modal.error(error.message);
    }
  };



  const onChangeFileUrl = (fileUrl:string, index:number) => {
    const newFile = [...imageUpload]
    newFile[index] = fileUrl
    setImageUpload(newFile)
  }
  

  useEffect(() => {
    if(props.data?.fetchBoard.images?.length){
      setImageUpload([...props.data?.fetchBoard.images])
    }
  },[props.data])



    return(
        <S.BodyHTML>
            <S.BoardWrapper>
                <S.BigTitle> {props.isEdit ? "게시물 수정" : "새 글 작성"} </S.BigTitle>

                <S.HRLine></S.HRLine>


  <S.DivWrapper>
                <S.SmallTitle>제목</S.SmallTitle>
                <S.TitleInput  type="text"
                onChange={onChangeTitle} 
                defaultValue={props.data?.fetchBoard.title}/>
</S.DivWrapper>

<S.DivWrapper>
                <S.SmallTitle>내용</S.SmallTitle>
                <S.Context
                onChange={onChangeContents}
                defaultValue={props.data?.fetchBoard.contents}
                ></S.Context>

</S.DivWrapper>

<S.DivWrapper>
                <S.SmallTitle>이미지</S.SmallTitle>

                <S.ImageWrapper>
                  {imageUpload?.map((el:any, index:any)=>(
                  <UploadFilePage 
                  key={uuidv4()} fileUrl={el} index={index} 
                  onChangeFileUrl={onChangeFileUrl}/>
                  ))}
                </S.ImageWrapper>
</S.DivWrapper>


<S.DivWrapper>
                <S.SmallTitle>작성자</S.SmallTitle>
                
                  <S.HalfInput type="text" onChange={onChangeWriter}
                value={props.data?.fetchBoard.writer}/>

                <S.SmallTitle>비밀번호</S.SmallTitle>
                <S.HalfInput  type="password" onChange={onChangePassword}/>
</S.DivWrapper>
            </S.BoardWrapper>


            <S.ButtonWrapper>
                <S.BoardBtn 
                  onClick={props.isEdit ? onClickUpdate : onClickSubmit}>
                  {props.isEdit ? "수정" : "등록"}</S.BoardBtn>
                <S.CancelBtn>취소</S.CancelBtn>
            </S.ButtonWrapper>
        </S.BodyHTML>
    )
}