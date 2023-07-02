import { gql } from '@apollo/client';
export const FETCH_USED_ITEM_QUESTION_ANSWERS = gql`
    query fetchUseditemQuestionAnswers($useditemQuestionId: ID!){
        fetchUseditemQuestionAnswers(useditemQuestionId:$useditemQuestionId){
            _id
            contents
            createdAt
        }
    }
`
export const DELETE_USED_ITEM_ANSWER = gql`
    mutation deleteUseditemQuestionAnswer($useditemQuestionAnswerId:ID!){
        deleteUseditemQuestionAnswer(useditemQuestionAnswerId:$useditemQuestionAnswerId)
    }
`