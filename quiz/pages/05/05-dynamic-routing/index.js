import {useState} from 'react'
import {useMutation, gql} from '@apollo/client'
import {useRouter} from 'next/router' 

const CREATE_PRODUCT = gql`
    mutation myMutation($seller: String, $createProductInput: CreateProductInput!){
        createProduct(seller: $seller ,createProductInput : $createProductInput){
            _id
            number
            message
        }
    }
`

export default function DynamicRoutingPage(){

    const router = useRouter()

    const [seller, setSeller] = useState("")
    const [name, setName] = useState("")
    const [detail, setDetail] = useState("")
    const [price, setPrice] = useState("")

    const [callGraphqlAPI] = useMutation(CREATE_PRODUCT)

    const callAPI = async() => {
    try{
            const result = await callGraphqlAPI({
                variables: { 
                seller: seller,
                createProductInput: {
                name: name,
                detail: detail,
                price: price
                }
            } 
        })
    console.log(result)
    console.log(result.data.createProduct._id)
    alert("게시글 등록에 성공했습니다!")
    alert("상세페이지로 이동합니다!")

    router.push(`/05-dynamic-routed/${result.data.createProduct._id}`)

}catch(error){
        alert(error.message)
    }
}

    const onChangeSeller = (e) => {
        setSeller(e.target.value)
    }

    const onChangeName = (e) => {
        setName(e.target.value)
    }

    const onChangeDetail = (e) => {
        setDetail(e.target.value)
    }

    const onChangePrice = (e) => {
        setPrice(parseInt(e.target.value))
    }



    return(
        <div>
            판매자 : <input type="text" onChange={onChangeSeller} /> <br />
            상품명 : <input type="text" onChange={onChangeName} /><br />
            상품내용 : <input type="text" onChange={onChangeDetail} /><br />
            상품가격 : <input type="number" onChange={onChangePrice} /><br />
            <button onClick = {callAPI}>상품 등록하기</button>
        </div>
    )


}
