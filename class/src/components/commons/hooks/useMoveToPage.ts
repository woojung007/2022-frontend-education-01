import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { visitedPageState } from "../../../commons/store/index";

export function useMoveToPage() {
  const router = useRouter();
  const [visitedPage, setVisitedPage] = useRecoilState(visitedPageState);
  // 함수에 괄호 추가했으니까 여기도 () 추가하기
  const onClickMoveToPage = (path: any) => () => {
    setVisitedPage(path);
    router.push(path);
  };

  return {
    visitedPage,
    onClickMoveToPage,
  };
}
