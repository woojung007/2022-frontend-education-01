import { BodyHTML, BoardWrapper, BigTitle, HRLine, HalfInput, ButtonWrapper, BoardBtn } from '../detail/BoardDetail.styles';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useMutation, gql, useQuery } from '@apollo/client';
import { useState } from 'react';





const InputWrapper = styled.div`
    width: 100%;
    height: 100%;
`

const DELETE_BOARD = gql`
    mutation deleteBoard($boardId: ID!){
        deleteBoard(boardId: $boardId)
    }
`

const FETCH_BOARDS = gql`
    query fetchBoards($search: String, $page: Int){
        fetchBoards(search:$search, page: $page){
            _id
            writer
            title
            createdAt
            updatedAt
        }
    }
`


export default function BoardDeletePage(){
const [password, setPassword] = useState("");

const router = useRouter()
const [deleteBoard] = useMutation(DELETE_BOARD);




const onChangePassword = (event) => {
      setPassword(event.target.value)
}



const onClickDelete = async (event: any) => {
    const DeleteVariables = {
        boardId: (event.target as HTMLButtonElement).id
      };


  
    // if(password === ){

    // }


    try{
        await deleteBoard({ variables: DeleteVariables });
        alert("게시물이 삭제되었습니다!")
        router.push("../boards");
    }catch(error){

    }

    
  };





    return (
        <BodyHTML>
            <BoardWrapper>
                <BigTitle>게시물 삭제</BigTitle>
                <HRLine></HRLine>

                <InputWrapper>
                    비밀번호 <HalfInput type="password" onChange={onChangePassword}/>
                </InputWrapper>
            </BoardWrapper>


            <ButtonWrapper>
                <BoardBtn onClick={onClickDelete}>삭제</BoardBtn>
                <BoardBtn>취소</BoardBtn>
            </ButtonWrapper>

        </BodyHTML>
    )
}