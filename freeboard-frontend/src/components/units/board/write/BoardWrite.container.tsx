import { ChangeEvent, useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import BoardWriteUI from "./BoardWrite.presenter";
import { IBoardWriteProps, IUpdateVariables } from "./BoardWrite.types";
import { Modal } from "antd";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
} from "../../../../commons/types/generated/types";

export default function BoardWrite(props: IBoardWriteProps) {
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [imageUpload, setImageUpload] = useState(["", "", ""]);

  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentError, setContentError] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);
  const [updateBoard] = useMutation<
    Pick<IMutation, "updateBoard">,
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD);

  const onClickUpdate = async () => {
    const currentFile = JSON.stringify(imageUpload);
    const defaultFile = JSON.stringify(props.data.fetchBoard.images);
    const isChangeFile = currentFile !== defaultFile;

    if (
      !title &&
      !contents &&
      !youtubeUrl &&
      !address &&
      !addressDetail &&
      !zipcode &&
      !isChangeFile
    ) {
      alert("수정한 내용이 없습니다.");
      return;
    }

    try {
      const updateVariables: IUpdateVariables = {
        boardId: router.query.boardId,
      };

      // 비어있지 않으면 채워줘라 - defaultValue 할 때 무조건 필요함
      if (writer) updateVariables.writer = writer;
      if (title) updateVariables.title = title;
      if (contents) updateVariables.content = contents;
      if (youtubeUrl) updateVariables.youtubeUrl = youtubeUrl;
      if (zipcode || address || addressDetail) {
        updateVariables.boardAddress = {};
        if (zipcode) updateVariables.boardAddress.zipcode = zipcode;
        if (address) updateVariables.boardAddress.address = address;
        if (addressDetail)
          updateVariables.boardAddress.addressDetail = addressDetail;
      }
      if (isChangeFile) updateVariables.images = imageUpload;

      await updateBoard({
        variables: {
          updateBoardInput: {
            title,
            contents,
            youtubeUrl,
            boardAddress: {
              zipcode,
              address,
              addressDetail,
            },
            images: imageUpload,
          },
          password,
          boardId: String(router.query.boardId),
        },
      });

      router.push(`/boards/${router.query.boardId}`);
    } catch (error: any) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  useEffect(() => {
    if (props.data?.fetchBoard.images?.length) {
      setImageUpload([...props.data?.fetchBoard.images]);
    }
  }, [props.data]);

  const callGraphqlAPI = async () => {
    if (writer === "") {
      setWriterError("이름을 입력해 주세요");
    }
    if (password === "") {
      setPasswordError("비밀번호를 입력해주세요");
    }

    if (title === "") {
      setTitleError("제목을 입력해주세요");
    }

    if (contents === "") {
      setContentError("내용을 입력해주세요");
    }

    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer,
            password,
            title,
            contents,
            youtubeUrl,
            images: imageUpload,
            boardAddress: {
              zipcode,
              address,
              addressDetail,
            },
          },
        },
      });

      if (writer !== "" && password !== "" && title !== "" && contents !== "") {
        Modal.success({
          content: "게시물 등록에 성공했습니다!! 상세페이지로 이동합니다!",
        });
      }

      router.push(`/boards/${result.data?.createBoard._id}`);
    } catch (error) {}
  };

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);

    if (event.target.value !== "") {
      setWriterError("");
    }

    if (event.target.id && password && title && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);

    if (event.target.value !== "") {
      setPasswordError("");
    }

    if (writer !== "" && event.target.id !== "" && title !== "" && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);

    if (event.target.value !== "") {
      setTitleError("");
    }

    if (
      writer !== "" &&
      password !== "" &&
      event.target.id !== "" &&
      contents
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);

    if (event.target.value !== "") {
      setContentError("");
    }

    if (writer !== "" && password !== "" && title !== "" && event.target.id) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeAddressDetail = (event: ChangeEvent<HTMLInputElement>) => {
    setAddressDetail(event.target.value);
  };

  const onChangeYoutubeUrl = (event: ChangeEvent<HTMLInputElement>) => {
    setYoutubeUrl(event.target.value);
  };

  const onChangeFileUrl = (fileUrl: string, index: number) => {
    const newFile = [...imageUpload];
    newFile[index] = fileUrl;
    setImageUpload(newFile);
  };

  // 주소 modal창
  const showModal = () => {
    setIsOpen(true);
  };

  const handleOk = () => {
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  const handleComplete = (data: any) => {
    setZipcode(data.zonecode);
    setAddress(data.address);
    setIsOpen(false);
  };

  return (
    <BoardWriteUI
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onChangeAddressDetail={onChangeAddressDetail}
      onChangeYoutubeUrl={onChangeYoutubeUrl}
      callGraphqlAPI={callGraphqlAPI}
      onClickUpdate={onClickUpdate}
      writerError={writerError}
      passwordError={passwordError}
      titleError={titleError}
      contentError={contentError}
      isActive={isActive}
      handleOk={handleOk}
      handleCancel={handleCancel}
      handleComplete={handleComplete}
      showModal={showModal}
      isOpen={isOpen}
      zipcode={zipcode}
      address={address}
      addressDetail={addressDetail}
      imageUpload={imageUpload}
      onChangeFileUrl={onChangeFileUrl}
      isEdit={props.isEdit}
      data={props.data}
    />
  );
}
