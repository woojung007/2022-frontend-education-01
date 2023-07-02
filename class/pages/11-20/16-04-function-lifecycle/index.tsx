import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

export default function CounterPage() {
  const router = useRouter();
  // inputRef = createRef<HTMLInputElement>();
  const inputRef = useRef<HTMLInputElement>(null);
  const [count, setCount] = useState(99);

  // useEffect 하나로 class의 생명주기를 퉁칠 수 있다.
  // 1. DidMount
  // 한번만 실행되고 다음부턴 실행되지 않는다.
  useEffect(() => {
    console.log("마운트 됌!!!!!!");
    inputRef.current?.focus();
  }, []);

  // 2. DidUpdate
  // 처음에도 한번 실행된다는 점은 DidUpdate와 다르다.
  // 뭐가 바뀌든 실행된다.
  useEffect(() => {
    console.log("수정되고 다시 그려짐!!!!!!");
  }); // 대괄호가 없어짐.

  // count가 변경될때만 실행된다.
  useEffect(() => {
    console.log("update!!!!!!");
  }, [count]);

  // 3. WillUnmount
  // 1번과 3번이 모양이 같기 때문에 하나로 합칠 수 있다.
  useEffect(() => {
    return () => {
      console.log("컴포넌트 사라짐!!!!");
    };
  }, []);
  // 한번만 실행될 때는 [] 써라
  // []  : dependency array : 의존성 배열
  // [count] 라면? count 가 바뀔때만 실행 (처음 한번은 실행)

  // 4. DidMount와 WillUnmount를 합치기
  useEffect(() => {
    console.log("마운트됨!!!");
    inputRef.current?.focus();

    return () => {
      console.log("컴포넌트 사라짐!!!!");
    };
  }, []);

  // 5. useEffect의 잘못된 사용 예 (1. 추가렌더링, 2.무한루프 )
  // useEffect(()=>{
  //     setCount(prev => prev + 1)
  // },[count])
  //  불필요한 화면 렌더링이 더 일어난다.
  // 가급적이면 useEffect안에 setState 사용을 권장하지 않는다.

  const onClickCounter = () => {
    setCount((prev: number) => prev + 1);
  };

  const onClickMove = () => {
    router.push("/");
  };

  console.log("나는 언제 실행되게???????"); // 제일 먼저 실행된다.

  return (
    <div>
      <input type="text" ref={inputRef} />
      <div>현재카운트: {count}</div>
      <button onClick={onClickCounter}>카운트 올리기 !!!</button>
      <button onClick={onClickMove}>나가기!!!</button>
    </div>
  );
}
