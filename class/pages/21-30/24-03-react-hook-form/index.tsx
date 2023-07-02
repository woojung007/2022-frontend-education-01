import { useForm } from "react-hook-form";

interface IFormValues {
  writer?: string;
  title?: string;
  contents?: string;
}

export default function ReactHookFormPage() {
  const { register, handleSubmit, formState } = useForm();

  const onClickSubmit = (data: IFormValues) => {
    console.log(data);
  };

  console.log("리렌더링 체크!!!");

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      writer: <input type="text" {...register("writer")} />
      title: <input type="text" {...register("title")} />
      content: <input type="text" {...register("contents")} />
      {/* content: <input type="text" {...register("boardAddress.addressDetail")}/> */}
      <button disabled={formState.isSubmitting}>submit</button>
    </form>
  );
}
