import {useState} from 'react'

export default function setToken() {

    
        const [token,setToken] = useState("");

        let getToken = () => {
            setToken(document.getElementById("token").innerText = String(Math.floor(Math.random() * 1000000)).padStart(6,"0"));
        }

    return(
    <>
        <div id="token">{token}</div>
        <button onClick = {getToken}>인증번호 전송</button>
    </>
    )

}