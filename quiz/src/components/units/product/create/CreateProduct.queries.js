import {gql} from '@apollo/client'


export const CREATE_PRODUCT = gql`
    mutation myMutation($seller: String, $createProductInput: CreateProductInput!){
        createProduct(seller: $seller ,createProductInput : $createProductInput){
            _id
            number
            message
        }
    }
`


export const UPDATE_PRODUCT = gql`
    mutation myMutation ($productId: ID, $updateProductInput:UpdateProductInput!) {
        updateProduct(productId:$productId, updateProductInput: $updateProductInput){
            _id
            number
            message
        }
    }
`
