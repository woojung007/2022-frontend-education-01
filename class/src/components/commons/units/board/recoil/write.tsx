import { useRecoilState } from 'recoil';
import { isEditState } from '../../../../../commons/store/index';


export default function GlobalWritePage() {

    const [isEdit] = useRecoilState(isEditState);


    return(
        <>
            <h1>{isEdit ? "수정하기" : "등록하기"}</h1>;
        </>
    )
}







