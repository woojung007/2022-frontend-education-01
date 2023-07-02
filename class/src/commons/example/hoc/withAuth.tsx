import { useEffect } from 'react';
import { useRouter } from 'next/router';


export const withAuthExample = (Component:any) => (props:any) => {
    const router = useRouter();


    useEffect(()=>{
        if(!localStorage.getItem("accessToken")){
            alert("로그인 후 이용 가능합니다.")
            router.push("/example/hoc/login")
        }
    },[])


    return <Component {...props}/>


}