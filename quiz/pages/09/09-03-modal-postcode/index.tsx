import { Modal, Button } from 'antd';
import { useState } from 'react';
import DaumPostcode from 'react-daum-postcode';

export default function ModalPage(){
  const [data, setData] = useState()
  const [isOpen, setIsOpen] = useState(false);

    const showModal = () => {
      setIsOpen(true)
    };
  
    const handleOk = () => {
      setIsOpen(false);
    };
  
    const handleCancel = () => {
      setIsOpen(false);
    };
  
    const handleComplete = (data: any) => {
        setData(data.address)
        setIsOpen(false);
    }

    return (
      <>
        <Button onClick={showModal}>
          모달열기
        </Button>
        <> {[data]} </>

        {isOpen &&
        <Modal 
        visible={true} 
        onOk={handleOk} 
        onCancel={handleCancel}>
          <DaumPostcode onComplete={handleComplete} />
        </Modal>
        }
      </>
    );
  };