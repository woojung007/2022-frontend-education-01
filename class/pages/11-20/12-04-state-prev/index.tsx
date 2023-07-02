import { useState } from "react";

export default function StatePrevPage() {
  const [count, setCount] = useState(0);

  const onClickCount = () => {
    // setCount((prev) => (prev + 1));
    // setCount((prev) => (prev + 1));
    // setCount((prev) => (prev + 1));

    setCount(count + 1); // 현재 count는 0 + 1 => 을 상자에 담는다
    setCount(count + 1); // 1이 상자에 담겼지만 여전히 count는 0이므로 1이 상자에 다시 담긴다
    setCount(count + 1); // 결국 최종적으로 1이 상자에 담겨 화면에도 1이 반영된다
    // 1
  };

  return (
    <>
      <div> 현재카운트: {count}</div>
      <button onClick={onClickCount}>카운트 올리기!!!</button>
    </>
  );
}
