import { Modal, Button } from 'antd';
import { useState } from 'react';

export default function ModalPage(){
    const [isModalVisible, setIsModalVisible] = useState(false);
  
    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };
  

    return (
      <>
        <Button onClick={showModal}>
          모달열기
        </Button>
        <Modal title="게시글 등록" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        게시글이 등록되었습니다.
        </Modal>
      </>
    );
  };