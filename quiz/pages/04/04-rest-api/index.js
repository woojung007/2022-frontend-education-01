import axios from 'axios'
import {useState} from 'react'

export default function RestGetPage(){
    
    const [data, setData] = useState("")

    const callRestAPI = async () => {

        const result = await axios.get("https://koreanjson.com/users")
        console.log(result);
        console.log(result.data);
        setData(result.data);
    }
    
    return (
        <>
            <button onClick={callRestAPI}>REST-API 요청하기</button>
        </>

    )
}