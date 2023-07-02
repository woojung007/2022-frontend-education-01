import { useState, useEffect, useRef } from "react";
export default function LazyPreLoadPage() {
  const [imgTag, setImgTag] = useState<HTMLImageElement>();
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const img = new Image();
    img.src =
      "https://item.kakaocdn.net/do/75b5dfb53107ba851c1c89205d6d5e1b7154249a3890514a43687a85e6b6cc82";
    img.onload = () => {
      setImgTag(img);
    };
  }, []);

  const onClickPreLoad = () => {
    console.log("click");
    if (imgTag) divRef.current?.appendChild(imgTag);
  };

  return (
    <div>
      <div ref={divRef}></div>
      <button onClick={onClickPreLoad}>이미지 보여주기</button>
    </div>
  );
}
