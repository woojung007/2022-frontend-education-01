import { MouseEvent } from "react";

export default function HofPage() {
  const onClickChild = (el: any) => (event: MouseEvent<HTMLDivElement>) => {
    // event.target.id 대신에 el을 받아서 사용하는 방식
    console.log(el);
  };

  return (
    <div>
      <h1>HOF 연습 페이지입니다!!!</h1>
      {["철수", "영희", "훈이"].map((el) => (
        <div key={el} onClick={onClickChild(el)}>
          {el}
        </div>
      ))}
    </div>
  );
}
