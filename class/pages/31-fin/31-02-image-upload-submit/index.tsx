import { useState, ChangeEvent } from "react";
import { gql, useMutation } from "@apollo/client";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
      images
    }
  }
`;

export default function ImageUploadPreviewPage() {
  const [files, setFiles] = useState<File>();
  // const [file2, setFile2] = useState<File>();
  // const [file3, setFile3] = useState<File>();

  const [imageUrl, setImageUrl] = useState("");
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [createBoard] = useMutation(CREATE_BOARD);

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
        setFiles(file);
      }
    };
  };

  const onClickSubmit = async () => {
    const result1 = await uploadFile({ variables: { file: files } });
    const imageUrl = result1.data.uploadFile.url;

    const result2 = await createBoard({
      variables: {
        createBoardInput: {
          writer: "우정잉",
          password: "1234",
          title: "이미지",
          contents: "업로드",
          images: [imageUrl],
        },
      },
    });
    console.log(result2);
    console.log(result2.data.createBoard._id);
  };

  return (
    <div>
      <input type="file" onChange={onChangeFile} />
      <img src={imageUrl} />
      <button onClick={onClickSubmit}>게시글 등록하기</button>
    </div>
  );
}
