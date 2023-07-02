import {useState} from 'react'

export default function counterState() {

        const [count,counter] = useState(0);

        let setCount = () => {
            counter(document.getElementById("addNum").value = count + 1);
        }

    return(
    <>
        <div id="addNum">{count}</div>
        <button onClick = {setCount}>카운트 증가</button>
    </>
    )

}