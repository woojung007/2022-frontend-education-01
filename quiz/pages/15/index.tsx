import axios from 'axios';
import { useState, useEffect } from 'react';



export default function OpenAPIQuizPage(){
    const [dogUrl, setDogUrl] =useState("")


    useEffect(()=>{
        const dog = async() => {
            const result = await axios.get("https://dog.ceo/api/breeds/image/random")
            setDogUrl(result.data.message)
        };
        dog()
    },[])

    return(
        <>
            <img src={dogUrl}/>
        </>
    )
}