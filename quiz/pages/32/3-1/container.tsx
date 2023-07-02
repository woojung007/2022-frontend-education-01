import { useMemo, useState, useCallback } from "react";
import MemoizationPresenterPage from "./presenter";

export default function MemoizationContainerPage() {
  console.log("컨테이너가 렌더링 됩니다!!");
  let countLet = 0;
  const [countState, SetCountState] = useState(0);

  // 6. useMemo 적용하기
  const aaa = useMemo(() => Math.random(), [countState]);
  console.log(aaa);

  const onClickCountLet = () => {
    console.log(countLet + 1);
    countLet += 1;
  };

  // 8. useCallback으로 state 기억 못하게하기
  const onClickCountState = useCallback(() => {
    SetCountState((prev) => prev + 1);
  }, []);

  // 9. useMemo로  useCallback 만들기
  // const onClickCountState = useMemo(()=>{
  //     return () => {
  //       SetCountState(countState+1)
  //     }
  // },[])

  return (
    <div>
      <div>=================================</div>

      <h1>이것은 컨테이너 입니다!!</h1>

      <div>카운트(let):{countLet}</div>
      <button onClick={onClickCountLet}>카운트(let) +1 올리기!!!</button>

      <div>카운트(state):{countState}</div>
      <button onClick={onClickCountState}>카운트(state) +1 올리기!!!</button>
      <div>=================================</div>
      <MemoizationPresenterPage countState={countState} />
    </div>
  );
}
