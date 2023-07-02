import {useState} from 'react'
import {useMutation,gql} from '@apollo/client'

const CREATE_PRODUCT = gql`
    mutation {
        createProduct(seller: "우정", createProductInput: {name : "맥북", detail : "pro", price : 200}){
        _id
        number
        message
    }
}
`

export default function GraphqlMutationPage(){

    const [data, setData] = useState("")
    const [callAPI] = useMutation(CREATE_PRODUCT)

    const onClickSubmit = async() => {
        const result = await callAPI()
        console.log(result)
        console.log(data)
        setData(result.data.title)
    }


    return(
        <>
            <button onClick={onClickSubmit}>상품 등록하기</button>
            <div>{data}</div>
        </>

    )
    
}