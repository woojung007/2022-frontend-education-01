

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



    return 




}
