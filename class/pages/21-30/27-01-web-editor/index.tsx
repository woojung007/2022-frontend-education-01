// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
// ssr: 서브사이드 렌더링
export default function WebEditorPage() {
  const onChangeContents = (value: string) => {
    console.log(value);
  };
  return (
    <div>
      작성자: <input type="text" />
      <br />
      비밀번호: <input type="password" />
      <br />
      제목: <input type="text" />
      <br />
      내용 : <ReactQuill onChange={onChangeContents} />;
      <br />
      <button>등록하기</button>
    </div>
  );
}

// onChange는 만들어준 함수이다
