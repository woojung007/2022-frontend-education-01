import { createRef, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function ComponentLifecycle(){
    const [isChange, setIsChange] = useState(false);
    const router = useRouter()
    const inputRef = createRef<HTMLInputElement>(null)

    useEffect(()=> {
        console.log("update!!!!!!")
    },[])

    useEffect(() => {
        alert("Rendered!");
        inputRef.current?.focus()
        return () => {
            alert("Bye!!")
            }
    },[])

    const onClickChange = () => {
        alert( "Changed!!")
        setIsChange(true)
    }


    const onClickMove = () => {
        router.push("/");
    }

        return(
            <div>
            <button onClick={onClickChange}>변경</button>
            <button onClick={onClickMove}>이동</button>
            <input type="password" ref={inputRef}></input>
            </div> 
        )
    
}


