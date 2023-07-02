import { ChangeEvent, useState } from "react";
import { gql, useMutation } from "@apollo/client";

import { Modal } from "antd";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../../quiz/src/commons/types/generated/types";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageUploadPage() {
  const [imageUrl, setImageUrl] = useState<string | undefined>("");

  // mutation 실제로 사용하기 위해서
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    console.log(file);

    try {
      const result = await uploadFile({ variables: { file } });
      console.log(result.data?.uploadFile.url);

      setImageUrl(result.data?.uploadFile.url);
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <div>
      <div>이미지 업로드 연습하기</div>
      <input type="file" onChange={onChangeFile} />
      <img src={`https://storage.googleapis.com/${imageUrl}`} />
    </div>
  );
}
