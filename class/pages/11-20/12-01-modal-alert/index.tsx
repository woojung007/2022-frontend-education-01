import { Modal } from "antd";

export default function ModalAlertPage() {
  const onClickSuccessButton = () => {
    Modal.success({ content: "게시물 등록에 성공했습니다!!" });
  };

  const onClickFailButton = () => {
    Modal.error({ content: "게시물 등록에 실패했습니다!!" });
  };

  return (
    <>
      <button onClick={onClickSuccessButton}>성공!</button>
      <button onClick={onClickFailButton}>실패!</button>
    </>
  );
}
