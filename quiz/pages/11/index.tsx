import { gql } from '@apollo/client'
import { useQuery } from '@apollo/client'
import styled from '@emotion/styled';
import { useState } from 'react';



const FETCH_BOARDS = gql`
    query fetchBoards($page: Int){
        fetchBoards(page: $page){
            _id
            writer
            title
            createdAt
            updatedAt
        }
    }
`


const FETCH_BOARDS_COUNT = gql`
    query fetchBoardCount{
        fetchBoardsCount
    }
`





const Wrapper = styled.div`
    width: 100%;

`


const RowTitle = styled.div`
display: flex;
border-bottom: 1px solid #BDBDBD;
text-align: center;
height: 7%;
color: #4F4F4F;
font-weight: 400;
font-size: 16px;
line-height: 50px;
`

const Row = styled.div`
display: flex;
border-bottom: 1px solid #BDBDBD;
text-align: center;
height: 7%;
color: #4F4F4F;
font-weight: 400;
font-size: 16px;
line-height: 50px;

cursor: pointer;
:hover{
    background-color: aliceblue;
}
`

const ColumnNum = styled.div`
width: 5%;
`

const Column = styled.div`
width: 80%;
`

const ColumnSmall = styled.div`
width: 30%;
`

const PagesWrapper = styled.div`
    width: 80%;
    display: flex;
    justify-content: center;

`

const Pages = styled.button`

    border: 0;
`

const PrevButton = styled.button`

`

const NextButton = styled.button`
`



export default function FetchBoardsPage(){
    const [startPage, setStartPage] = useState(1);
    const [current, setCurrent] = useState(1);

    const {data, refetch} = useQuery(FETCH_BOARDS);
    const {data: dataBoardsCount} = useQuery(FETCH_BOARDS_COUNT);

    const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10);

    const onClickPage = (event) => {
        refetch({page: Number( event.target.id)})
        setCurrent(Number( event.target.id));

    }

    const onClickPrevPage = (event) => {
        if(startPage === 1) return;
        setStartPage((prev)=> (prev - 10));
        refetch({page: startPage - 10 });
        setCurrent(startPage -10)
    }



    const onClickNextPage = (event) => {
        if(!(startPage + 10 <= lastPage)) return;
        setStartPage((prev)=> (prev + 10));
        refetch({page: startPage + 10 });
        setCurrent(startPage + 10)

    }


    return(
        <Wrapper>
         <RowTitle>
            <ColumnNum>ID</ColumnNum>
            <Column>제목</Column>
            <ColumnSmall>작성자</ColumnSmall>
            <ColumnSmall>날짜</ColumnSmall>
          </RowTitle>

        {data?.fetchBoards.map((el: any, index: number) => (
            <Row key={el._id}>
              <ColumnNum>{index + 1}</ColumnNum>
              <Column  id={el._id} >
                {el.title}
              </Column>
              <ColumnSmall>{el.writer}</ColumnSmall>
              <ColumnSmall>{el.createdAt.slice(0,10)}</ColumnSmall>
            </Row>
          ))} 

            <PagesWrapper>
                <PrevButton  disabled={startPage === 1  ? true : false}  onClick={onClickPrevPage}>❮</PrevButton>{`      `}
                {
                    new Array(10).fill(1).map((_, index) => index + startPage <= lastPage &&  (
                        <Pages style={{color : current === index + startPage? "red" : "black"}} key={index + startPage} id={String(index + startPage)} onClick={onClickPage}>
                            {`      `}{index + startPage}
                        </Pages>
                    ))
                } 
                {`      `}
                <NextButton disabled={!(startPage + 10 <= lastPage)? true : false} onClick={onClickNextPage}>❯</NextButton>
            </PagesWrapper>
        
        
        </Wrapper>

    )

}