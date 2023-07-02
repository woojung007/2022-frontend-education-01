import {useQuery, gql} from "@apollo/client"
import { useRouter } from "next/router"

const FETCH_PRODUCT = gql`
    query fetchProduct($productId: ID){
        fetchProduct(productId:$productId){
            _id
            seller
            name
            detail
            price
            createdAt
        }
    }
`

export default function FetchProductPage(){

    const router = useRouter()
    console.log(router)

    const {data} = useQuery(FETCH_PRODUCT,{
        variables: {productId: String(router.query.productID) }
    })

    console.log(data)

    return(
        <>
            <div>판매자 : {data? (data.fetchProduct.seller) : ('loading...')} </div>
            <div>상품명 : {data? (data.fetchProduct.name) :  ('loading...')} </div>
            <div>상품내용 : {data? (data.fetchProduct.detail) : ('loading...')} </div>
            <div>상품가격 : {data? (data.fetchProduct.price) : ('loading...')} </div>
        </>
    )
}