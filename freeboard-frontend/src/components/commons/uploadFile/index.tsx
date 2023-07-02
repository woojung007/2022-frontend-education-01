import { gql, useMutation } from "@apollo/client";
import { useRef, ChangeEvent } from "react";
import { Modal } from "antd";
import { checkFileValidation } from "../../../commons/libraries/validation";
import styled from "@emotion/styled";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

interface IUploadFilePage {
  imageUpload?: any;
  onChangeFileUrl: (fileUrl: any, index: number) => void;
  fileUrl: string;
  index: number;
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;

const UpImage = styled.img`
  width: 100px;
  height: 100px;
  border: 1px solid #bdbdbd;
  margin-right: 15px;
`;

const UploadDiv = styled.div`
  width: 100px;
  height: 100px;
  background-color: #bdbdbd;
  cursor: pointer;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 15px;
`;

const UploadHidden = styled.div``;

export default function UploadFilePage(props: IUploadFilePage) {
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const fileRef = useRef<HTMLInputElement>(null);

  const onClickUpload = () => {
    fileRef.current?.click();
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    console.log(file);

    const isValid = checkFileValidation(file);
    if (!isValid) return;

    try {
      const result = await uploadFile({ variables: { file } });
      console.log(result);
      props.onChangeFileUrl(result.data.uploadFile.url, props.index);
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <Wrapper>
      {props.fileUrl ? (
        <UpImage
          onClick={onClickUpload}
          src={`https://storage.googleapis.com/${props.fileUrl}`}
        />
      ) : (
        <UploadDiv onClick={onClickUpload}>
          <>+</>
          <br />
          <>Upload</>
        </UploadDiv>
      )}
      <UploadHidden>
        <input
          style={{ display: "none" }}
          type="file"
          onChange={onChangeFile}
          ref={fileRef}
        />
      </UploadHidden>
    </Wrapper>
  );
}
