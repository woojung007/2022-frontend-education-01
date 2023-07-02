import {useState} from 'react'
import {useMutation} from '@apollo/client'
import BoardWriteUI from "./BoardWrite.presenter"
import {CREATE_BOARD} from './BoardWrite.queries'


export default function BoardWrite(){
    const[isActive,setIsActive] = useState(false)

    const [myWriter, setMyWriter] = useState("")
    const [myTitle, setMyTitle ] = useState("")
    const [myContents, setMyContents ] = useState("")
    const [callAPI] = useMutation(CREATE_BOARD)

    const callGraphqlAPI = async () => {
    const result = await callAPI({
        variables: { writer : myWriter ,title : myTitle, contents : myContents }
    }) 
    console.log(result)

}
const onChangeWriter = (event) => {
    setMyWriter(event.target.value) 

    if(event.target.value !== "" && myTitle !== "" && myContents !== ""){
        setIsActive(true)
    }else{
        setIsActive(false)
    }
}

const onChangeTitle = (event) => {
    setMyTitle(event.target.value)

    if(myWriter !== "" && event.target.value !== "" && myContents !== ""){
        setIsActive(true)
    }else{
        setIsActive(false)
    }
}

const onChangeContents = (event) => {
    setMyContents(event.target.value)

    if(myWriter !== "" && myTitle !== "" && event.target.value !== ""){
        setIsActive(true)
    }else{
        setIsActive(false)
    }
}


return <BoardWriteUI 
        onChangeWriter ={onChangeWriter} 
        onChangeTitle={onChangeTitle}
        onChangeContents={onChangeContents}
        callGraphqlAPI={callGraphqlAPI}
        isActive={isActive}
        />

}