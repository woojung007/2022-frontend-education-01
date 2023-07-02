import { useQuery, gql, useMutation } from '@apollo/client'
import styled from '@emotion/styled'

const FETCH_PRODUCTS = gql`
    query fetchProducts($page: Int){
        fetchProducts(page: $page){
            _id
            seller
            name
            detail
            price
            createdAt
        }
    }
`

const DELETE_PRODUCT = gql`
    mutation deleteProduct($productId: ID){
        deleteProduct(productId: $productId){
            _id
            number
            message
        }
    }
`


const Row = styled.div`
display: flex;
border-bottom: 1px solid #888;
`

const ColumnSmall = styled.div`
width: 10%;
`


const Column = styled.div`
width: 20%;
`




export default function MapBoardPage(){
    const [deleteProduct] = useMutation(DELETE_PRODUCT)

    const {data} = useQuery(FETCH_PRODUCTS)


    const onClickDelete = (event) => {
        deleteProduct({
            variables : {productId: String(event.target.id)},
            refetchQueries: [{query: FETCH_PRODUCTS}]
        })
    }


    return (
        <div>
            {data?.fetchProducts.map((el,index) => (
                <Row key={el._id}>
                    <ColumnSmall><input type="checkbox" /></ColumnSmall>
                    <ColumnSmall>{index + 1}</ColumnSmall>
                    <Column>{el.name}</Column>
                    <Column>{el.detail}</Column>
                    <Column>{el.price}</Column>
                    <Column>{el.createdAt}</Column>
                    <Column>{el.seller}</Column>
                    <Column><button id={el._id} onClick={onClickDelete}>Delete</button></Column>
                </Row>
                ))
            }
        </div>


    )
}