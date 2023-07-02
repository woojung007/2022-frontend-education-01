import {useState} from 'react'

export default function setHi() {

    
        const [hello,setHi] = useState("안녕하세요");

        let changeHi = () => {
            setHi(document.getElementById("Btn").value = "반갑습니다");
        }

    return(
    <>
        <button onClick = {changeHi} id="Btn">{hello}</button>
    </>
    )

}