import GlobalWritePage from '../../../../src/components/commons/units/board/recoil/write';
import { useEffect } from 'react';
import { isEditState } from '../../../../src/commons/store/index';
import { useRecoilState } from 'recoil';



export default function GlobalStatePage() {



    const [, setIsEdit] = useRecoilState(isEditState);



    useEffect(()=>{
        setIsEdit(false)
    },[])


    return <GlobalWritePage  isEdit={false}  />
}