import { gql, useQuery } from '@apollo/client'
import BoardListPage from '../../src/components/units/board/list/BoardList.container';



export const FETCH_BOARDS = gql`
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



export default function BoardListMainPage(){

    const {data, refetch, fetchMore} = useQuery(FETCH_BOARDS);




    return (
        <>
            <BoardListPage data={data} refetch={refetch} fetchMore={fetchMore}/>
        </>
    )

}