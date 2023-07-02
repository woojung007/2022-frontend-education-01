import styled from '@emotion/styled'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const Wrapper = styled.div`
    background-color: pink;
    width: 100%;

    /* ::-webkit-scrollbar {
    display: none;
} */
`


const SimpleSlider = styled(Slider)`
    .slick-slide div{
        cursor: pointer;
        width: 90%;
        height: 40vh;
        margin: 0 auto;
        background: #dbdbdb;
        /* background-image: url("/images/banner.jpeg") ; */
        background-repeat: no-repeat;
        font-family: "FontGame";

    }


    /* .slick-prev:before {
    opacity: 1; 
    color: black; 
    z-index: 10;
    position: relative;
    left: 100px;
    width: 200px;
    }   
    .slick-next:before {
    opacity: 1;
    color: black;
    }
     */

`



export default function Sliders(){

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 4000,
        };
    

        return (
            <Wrapper>
                    <SimpleSlider {...settings}>
                    <div>Game Start!</div>
                    <div>2 번째 페이지</div>
                    <div></div>
                    <div></div>
                    </SimpleSlider>
            </Wrapper>
        );
    
    }


