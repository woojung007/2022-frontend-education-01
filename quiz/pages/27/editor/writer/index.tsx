// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useForm } from "react-hook-form";
import dynamic from "next/dynamic";
import { useMutation, gql } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      title
      contents
      writer
    }
  }
`;

export default function WebEditorPage() {
  const router = useRouter();
  const [createBoard] = useMutation(CREATE_BOARD);
  const onChangeContents = (value: string) => {
    console.log(value);
    setValue("contents", value === "<p><br></p>" ? "" : value);
  };
  const { register, handleSubmit, setValue, trigger } = useForm({
    mode: "onChange",
  });

  trigger("contents");

  const onClickSubmit = async (data) => {
    if (!(data.writer && data.password && data.title && data.contents)) {
      alert("모두 입력해 주세요");
      return;
    }

    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: data.writer,
            password: data.password,
            title: data.title,
            contents: data.contents,
          },
        },
      });
      router.push(`/quiz-27/editor/detail/${result.data?.createBoard._id}`);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };
  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자: <input type="text" {...register("writer")} />
      <br />
      비밀번호: <input type="password" {...register("password")} />
      <br />
      제목: <input type="text" {...register("title")} />
      <br />
      내용 : <ReactQuill onChange={onChangeContents} />
      <br />
      <button>등록하기</button>
    </form>
  );
}
