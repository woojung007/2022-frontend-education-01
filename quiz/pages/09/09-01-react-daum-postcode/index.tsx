import DaumPostcode from 'react-daum-postcode';
import { useState } from 'react';



export default function ReactDaumPostcodePage(){

    const [isOpen, setIsOpen] = useState(true);
    
    const handleComplete = (data: any) => {
        setIsOpen(true)
    }


    return (
        <>
        {isOpen &&
            <DaumPostcode onComplete={handleComplete}/>
        }
        </>
    )
}