import {useQuery} from "@apollo/client"
import { useRouter } from "next/router"
import BoardWriteUI from "./BoardRead.presenter"


export default function BoardWrite(){
    const router = useRouter()
    console.log(router)

    const {data} = useQuery(FETCH_BOARD, {
        variables: {number: Number(router.query.number)}
    })

    console.log(data)
    return <BoardWriteUI />
}