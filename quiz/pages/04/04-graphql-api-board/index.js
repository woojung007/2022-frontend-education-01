import {useState} from 'react'
import {useMutation,gql} from '@apollo/client'

const CREATE_BOARD = gql`
    mutation myMutation ($writer: String ,$title: String ,$contents: String) {
        createBoard(writer : $writer ,title : $title, contents : $contents){
        _id
        number
        message
    }
}
`

export default function GraphqlMutationPage(){
    const [myWriter, setMyWriter] = useState("")
    const [myTitle, setMyTitle ] = useState("")
    const [myContents, setMyContents ] = useState("")

    const [data, setData] = useState("")
    const [callAPI] = useMutation(CREATE_BOARD)

    const callGraphqlAPI = async() => {
        const result = await callAPI({
            variables: { writer : myWriter ,title : myTitle, contents : myContents }
        })
        console.log(result)
        console.log(data)
        setData(result.data.createBoard.message)
    }

    const onChangeWriter = (event) => {
        setMyWriter(event.target.value) 
    }

    const onChangeTitle = (event) => {
        setMyTitle(event.target.value)
    }

    const onChangeContents = (event) => {
        setMyContents(event.target.value)
    }

    return(
        <>
            작성자 : <input type = "text"  onChange={onChangeWriter} /><br  />
            제목 :  <input type = "text"  onChange={onChangeTitle}/><br  />
            내용 :  <input type = "text" onChange={onChangeContents} /><br  />
            <button onClick={callGraphqlAPI}>GRAPHQL-API 요청하기</button>
            <div>{data}</div>
        </>

    )
    
}