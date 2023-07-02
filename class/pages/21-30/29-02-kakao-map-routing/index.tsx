import { useRouter } from "next/router";
import Link from "next/link"; // router.push 와 같은 역할을 한다

export default function KakaoMapPage() {
  const router = useRouter();
  const onClickMoveToMap = () => {
    router.push("/29-03-kakao-map-routed");
  };
  return (
    <div>
      <button onClick={onClickMoveToMap}>맵으로 이동하기!!</button>

      <Link href={"/29-03-kakao-map-routed"}>
        <a>맵으로 이동하기</a>
        {/* 의미 없는 가짜 a 태그 */}
      </Link>
      {/* <a href="/29-03-kakao-map-routed">맵으로 이동하기</a> */}
    </div>
  );
}

// 49d7bc1bb0773f8853f0c0f71370b1dc
