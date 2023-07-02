import  {useState} from 'react'
import  {useMutation, gql} from '@apollo/client'

const NEW_BOARD = gql`
    mutation newGraphq($writer: String, $title: String, $contents: String) {
        createBoard(writer:$writer, title:$title, contents:$contents){
            _id
            number
            message
        }
    }
` 
const NEW_PRODUCT = gql`
    mutation newGraphq2($seller: String, $createProductInput: CreateProductInput!) {
        createProduct(seller: $seller, createProductInput: $createProductInput){
            _id
            number
            message
        }
    }
` 

const NEW_HARDCODING = gql`
    mutation{createBoard(writer:"박범수" title:"하드코딩" contents:"하드하드"){
    _id
    number
    message
  }
}
` 

export default function GraphqlMutationPage(){
    const [mywriter, setMyWriter] = useState("")
    const [mytitle, setMyTitle] = useState("")
    const [mycontents, setMyContents] = useState("")

    const [seller, setSeller] = useState("")
    const [name, setName] = useState("")
    const [detail, setDetail] = useState("")
    const [price, setPrice] = useState("")

    const [callApi] =useMutation(NEW_BOARD)
    const [callApi2] =useMutation(NEW_PRODUCT)
    const [callApi3] =useMutation(NEW_HARDCODING)

    const submit = async() => {
        const result = await callApi({
            variables:{
                writer: mywriter, 
                title: mytitle, 
                contents: mycontents
            }
        })
        console.log(result)
        console.log(result.data.createBoard.message)
    }
    const submit2 = async() => {
        const result = await callApi2({
            variables:{
                seller: seller,
                createProductInput:{
                    name: name,
                    detail: detail,
                    price: price
                }
            }
        })
        console.log(result)
        // console.log(result.data.createBoard.message)
    }

    const submit3 = async() => {
        const result = await callApi3()
        console.log(result)
    }

    const onChangeWriter = (event) =>{
        setMyWriter(event.target.value)
    }
    const onChangeTitle = (event) =>{
        setMyTitle(event.target.value)
    }
    const onChangeContents = (event) =>{
        setMyContents(event.target.value)
    }



    const onChangeSeller = (event) =>{
        setSeller(event.target.value)
    }
    const onChangeName = (event) =>{
        setName(event.target.value)
    }
    const onChangeDetail = (event) =>{
        setDetail(event.target.value)
    }
    const onChangeCPrice = (event) =>{
        setPrice(Number(event.target.value))
    }

    return(
        <>  
        <div>
            <div>
                graphql  API 데이터 요청<br /><br />
            </div>
            <div>
                작성자:<input type="text" onChange={onChangeWriter}/><br />
                제목:<input type="text" onChange={onChangeTitle}/><br />
                내용:<input type="text" onChange={onChangeContents}/><br />
                <button onClick={submit}>게시물 GRAPHQL-API 요청</button>
            </div><br></br>
            <div>
                판매자:<input type="text" onChange={onChangeSeller}/><br />
                상품명:<input type="text" onChange={onChangeName}/><br />
                설명:<input type="text" onChange={onChangeDetail}/><br />
                가격:<input onChange={onChangeCPrice}/><br />
                <button onClick={submit2}>제품 GRAPHQL-API 요청</button>
            </div>
            <br></br>
            <div>
                <button onClick={submit3}>하드코딩 GRAPHQL-API 요청</button>
            </div>
        </div>
        </>
    )
}