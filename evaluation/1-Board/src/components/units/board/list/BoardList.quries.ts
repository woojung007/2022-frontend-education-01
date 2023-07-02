import { gql } from '@apollo/client'



export const FETCH_BOARDS_QUERIES = gql`
    query fetchBoards{
        fetchBoards{
            _id
            writer
            title
            createdAt
        }
    }
`
