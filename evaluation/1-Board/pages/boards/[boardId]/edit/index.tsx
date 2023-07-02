import BoardWritePage from '../../../../src/components/units/board/write/BoardWrite.container';
import { useRouter } from 'next/router';
import { useQuery, gql } from '@apollo/client';


const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      createdAt
      updatedAt
      images
    }
  }
`;



export default function BoardEditPage() {
    const router = useRouter();
  
    const { data } = useQuery(FETCH_BOARD, {
      variables: { boardId: router.query.boardId }
    });
  
    return <BoardWritePage isEdit={true} data={data}/>
  
  }
  