import { rejects } from 'assert';
import axios from 'axios';
import { resolve } from 'path';
export default function CallbackPromiseAsyncAwaitPage(){


    const onClickCallback = () => {
        const aaa = new XMLHttpRequest()
        // get방식으로 url 요청
        aaa.open("get", "http://numbersapi.com/random?min=1&max=200")
        aaa.send()
        // 저 요청이 끝나면 이 콜백함수를 실행시켜줘
        aaa.addEventListener("load", (res)=>{
            const num = res.target.response.split(" ")[0]
            // res = responses
            console.log(num)

            const bbb = new XMLHttpRequest();
            bbb.open("get", `http://koreanjson.com/${num}`)
            bbb.send()
            bbb.addEventListener("load",(res)=>{
                const userId = res.target.responese.UserId

                const ccc = new XMLHttpRequest()
                ccc.open("get", `http://koreanjson.com/${userId}`)
                ccc.send()
                ccc.addEventListener("load", (res)=>{
                    console.log(res)  // 최종 결과값
                })
            })
        })
    }

// 콜백지옥

 
// new Pomise((resolve, reject)) =>{
//         // 외부 요청 코드
//         resolve("반가워요")

//         // 성공
//           resolve("반가워요")

//         // 실패
//         reject("에러발생!!!")
// }   

// 2. promise - axios 라는 라이브러리 안에서 promise로 바뀌ㅓ게 된다 
    const onClickPromise = () => {
        axios
        .get("http://numbersapi.com/random?min=1&max=200")
        .then((res) => {
            return axios.get(`http://koreanjson.com/${num}`)
        }).then
        .get("")
    }

    const onClickAsyncAwait = () => {
        
    }





    return(
        <div>
            <button onClick={onClickCallback}>Callback 요청하기!!</button>
            <button onClick={onClickPromise}>Promise 요청하기!!</button>
            <button onClick={onClickAsyncAwait}>Async-Await 요청하기!!</button>
        </div>
    )
}