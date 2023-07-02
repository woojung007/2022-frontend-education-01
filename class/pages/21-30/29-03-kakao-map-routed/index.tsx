// import Head from 'next/head'
// import Script from 'next/script'
import { useEffect } from 'react'



declare const window: typeof globalThis & {
    kakao:any;
}
export default function KakaoMapPage(){

    useEffect(()=>{

        const script = document.createElement("script")
        // 쿼리 스트링 - 이주소로 보내고 싶은데 마땅하지 않을 때 
        script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=49d7bc1bb0773f8853f0c0f71370b1dc&autoload=false"
        document.head.appendChild(script)

        script.onload = () =>{
            
            window.kakao.maps.load(function(){
                const container = document.getElementById('map'); // 지도를 담을 영역의 DOM 레퍼런스
                const options = { // 지도를 생성할 때 필요한 기본 옵션
                    center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표.
                    level: 3 // 지도의 레벨(확대, 축소 정도)
                };
        
                const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
                console.log(map)
        
            })
        }

 
    },[])
    return(
        <div>
            {/* <Head>
                <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=49d7bc1bb0773f8853f0c0f71370b1dc"></script>
            </Head>
             <Script src=""/>
                body에 스크립트가 추가된다 */}
            <div id="map" style={{width:500,height:400}}></div>
        </div>
    )
}

// 49d7bc1bb0773f8853f0c0f71370b1dc

