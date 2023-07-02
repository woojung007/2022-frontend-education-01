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

export default function FileReaderPage() {
  const [imageUrl, setImageUrl] = useState("");
  const [files, setFiles] = useState<File>();
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [createBoard] = useMutation(CREATE_BOARD);

  const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      alert("파일이 없습니다");
      return;
    }

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      if (typeof data.target?.result === "string") {
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
          title: "퀴즈",
          contents: "이미지업로드",
          images: [imageUrl],
        },
      },
    });
    console.log(result2.data.createBoard._id);
  };

  return (
    <div>
      작성자 : <input type="text" /> <br />
      비밀번호 : <input type="text" /> <br />
      제목 : <input type="text" /> <br />
      내용 : <input type="text" /> <br />
      이미지 <input type="file" onChange={onChangeFile} />
      <img src={imageUrl} />
      <button onClick={onClickSubmit}>저장하기</button>
    </div>
  );
}
