import { useEffect } from 'react';


declare const window: typeof globalThis &{
    kakao:any
}

export default function KaKaoMapPage(){
    useEffect(()=>{

        const script = document.createElement("script")
        script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=694e4cbc8ecc7b37c2c612e8b7e5b9fb&autoload=false"
        document.head.appendChild(script)

        script.onload = () =>{
            window.kakao.maps.load(function(){
                const container = document.getElementById('map'); // 지도를 담을 영역의 DOM 레퍼런스
                const options = { // 지도를 생성할 때 필요한 기본 옵션
                    center: new window.kakao.maps.LatLng(37.54699, 127.09598), // 지도의 중심좌표.
                    level: 3 // 지도의 레벨(확대, 축소 정도)
                };
        
                const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
                console.log(map)

                const imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png' // 마커이미지의 주소입니다    
                const imageSize = new window.kakao.maps.Size(64, 69) // 마커이미지의 크기입니다
                const imageOption = {offset: new window.kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
         
                
                // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
                const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize, imageOption)
                const markerPosition = new window.kakao.maps.LatLng(37.54699, 127.09598); // 마커가 표시될 위치입니다 

                // 마커를 생성합니다
                const marker = new window.kakao.maps.Marker({
                    position: markerPosition,
                    image: markerImage // 마커이미지 설정 
                });
      
                // 마커가 지도 위에 표시되도록 설정합니다
                marker.setMap(map);

                // 마커가 드래그 가능하도록 설정합니다 
                marker.setDraggable(true); 
        
            })
        }
    },[])

    return (
        <div>
            <div id="map" style={{width:500, height:400}}></div>
        </div>
    )
}