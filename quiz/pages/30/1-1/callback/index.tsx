import axios from "axios";
import { useState } from "react";

export default function CallbacksPage() {
  const [result, setResult] = useState([]);

  const onClickCallback = () => {
    const CallBack = new XMLHttpRequest();
    CallBack.open("get", "http://numbersapi.com/random?min=1&max=200");
    CallBack.send();
    CallBack.addEventListener("load", (res: any) => {
      const num = res.target.response.split(" ")[0];
      console.log("num", num);
      const CallBack2 = new XMLHttpRequest();
      CallBack2.open("get", `https://koreanjson.com/posts/${num}`);
      CallBack2.send();
      CallBack2.addEventListener("load", (res: any) => {
        const userId = JSON.parse(res.target.response).UserId;
        console.log("userId", userId);
        const Callback3 = new XMLHttpRequest();
        Callback3.open("get", `http://koreanjson.com/posts?userId=${userId}`);
        Callback3.send();
        Callback3.addEventListener("load", (res: any) => {
          console.log("res", res);
          console.log(res.currentTarget.response);
          const result = JSON.parse(res.currentTarget.response);
          console.log(result);
          setResult(result);
        });
      });
    });
  };

  const onClickPromise = () => {
    axios
      .get("http://numbersapi.com/random?min=1&max=200")
      .then((res) => {
        const num = res.data.split(" ")[0];
        return axios.get(`https://koreanjson.com/posts/${num}`);
      })
      .then((res) => {
        const userId = res.data.UserId;
        return axios.get(`http://koreanjson.com/posts?userId=${userId}`);
      })
      .then((res) => {
        console.log(res);
        const result = res.data;
        console.log(result);
        setResult(result);
      });
  };

  const onClickAsyncAwait = async () => {
    const res1 = await axios.get("http://numbersapi.com/random?min=1&max=200");
    const num = res1.data.split(" ")[0];
    const res2 = await axios.get(`https://koreanjson.com/posts/${num}`);

    const userId = res2.data.UserId;
    const res3 = await axios.get(
      `https://koreanjson.com/posts?userId=${userId}`
    );

    const result = res3.data;
    setResult(result);
    console.log(result);
  };

  return (
    <div>
      결과 : <button onClick={onClickCallback}>Callback</button>
      <br />
      결과 : <button onClick={onClickPromise}>Promise</button>
      <br />
      결과 : <button onClick={onClickAsyncAwait}>Async/Await</button>
      <br />
      {result.map((el: any) => (
        <div key={el.id}>
          <div>title : {el.title}</div>
          <div key={el.id}>content : {el.content}</div>
          <br />
        </div>
      ))}
      <div></div>
    </div>
  );
}
