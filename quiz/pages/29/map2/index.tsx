import { useRouter } from 'next/router';
export default function KaKaoMapPage(){
 const router = useRouter()
    const moveToKakaoMap = () =>{
        router.push("/quiz-29/map1")
    }

    return (
        <div>
            <button onClick={moveToKakaoMap}>이동하기</button>
        </div>
    )
}