import { gql } from '@apollo/client'


export const FETCH_USED_ITEM = gql`
    query fetchUseditem($useditemId: ID!){
        fetchUseditem(useditemId: $useditemId){
            _id
            name
            remarks
            contents
            price
            tags
            images
            pickedCount
            createdAt
            seller{
                name
            }
            useditemAddress{
                zipcode
                address
                addressDetail
            }
        }
    }
`




export const DELETE_USED_ITEM = gql`
    mutation deleteUseditem($useditemId: ID!){
        deleteUseditem(useditemId: $useditemId)
    }
`



export const CREATE_POINT_TO_BUYING = gql`
    mutation createPointTransactionOfBuyingAndSelling($useritemId: ID!){
        createPointTransactionOfBuyingAndSelling(useritemId: $useritemId){
            _id
        }
    }
`
export const TOGGLE_USED_ITEM_PICK = gql`
    mutation toggleUseditemPick($useditemId:ID!){
        toggleUseditemPick(useditemId:$useditemId)
    }
`


export const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn{
    fetchUserLoggedIn{
      email
      name
      userPoint{amount}
    }
  }
`