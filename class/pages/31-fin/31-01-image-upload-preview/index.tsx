import { useState, ChangeEvent } from "react";
export default function ImageUploadPreviewPage() {
  const [imageUrl, setImageUrl] = useState("");

  const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    // 배열도 ?. 옵셔널 체이닝 줄 수 있다
    const file = event.target.files?.[0];
    if (!file) {
      alert("파일이 없습니다");
      return;
    }

    // 내장 되어 있는 기능이다
    const fileReader = new FileReader();
    // 파일리더가 파일을 임시 url 형태로 만들어준다
    fileReader.readAsDataURL(file);
    // 읽어진 결과물(데이터)이 들어오게 된다
    fileReader.onload = (data) => {
      if (typeof data.target?.result === "string") {
        console.log(data.target?.result);
        setImageUrl(data.target?.result);
      }
    };
  };
  return (
    <div>
      <input type="file" onChange={onChangeFile} />
      <img src={imageUrl} />
    </div>
  );
}
