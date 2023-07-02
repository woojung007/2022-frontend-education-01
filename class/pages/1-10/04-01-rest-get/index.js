import axios from "axios";
import { useState } from "react";

export default function RestGetPage() {
  const [data, setData] = useState("");

  const callRestAPI = async () => {
    const result = await axios.get("https://koreanjson.com/posts/1");
    // get - method         posts - endpoint
    console.log(result);
    console.log(result.data.title);
    setData(result.data.title);
  };

  return (
    <>
      {" "}
      {/* 프래그먼트 */}
      <button onClick={callRestAPI}>REST-API 요청하기</button>
      <div>{data}</div>
    </>
  );
}
