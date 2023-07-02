import { useState, useEffect } from "react";
import axios from "axios";

export default function OpenAPIUseEffectPage() {
  const [dogUrl, setDogUrl] = useState("");

  useEffect(() => {
    const aaa = async () => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      setDogUrl(result.data.message);
    };
    aaa();
  }, []);

  return (
    <>
      <div>오픈 API 연습!!!</div>
      <img src={dogUrl} />
    </>
  );
}
