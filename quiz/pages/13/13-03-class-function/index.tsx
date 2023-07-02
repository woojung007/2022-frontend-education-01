import { Component, createRef, useState,useEffect } from 'react';
import { useRouter } from 'next/router';

export default function MyComponent(){
    const [count, setCount] = useState(0)
    const inputRef = createRef<HTMLInputElement>();
    const router = useRouter()

    useEffect(()=> {
        console.log("컴포넌트가 변경됐습니다~");
    },[count])



    useEffect(()=>{
        console.log("컴포넌트가 마운트됐습니다~");
        inputRef.current?.focus();
        return () => {
            alert("컴포넌트가 제거됩니다~");
        }
    },[])


    const onClickCounter = () => {
        setCount(prev => prev + 1)
    };


    const onClickMove = () => {
        router.push("/")
    }

    console.log("마운트 시작");

    return (
      <>
        <input type="password" ref={inputRef} />
        <div>카운트: {count}</div>
        <button onClick={onClickCounter}>카운트(+1)</button>
        <button onClick={onClickMove}>이동하기</button>
      </>
    );

}