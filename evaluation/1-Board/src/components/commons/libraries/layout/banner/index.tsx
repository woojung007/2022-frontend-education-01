import styled from '@emotion/styled'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const Wrapper = styled.div`
    width: 80%;
`


const SimpleSlider = styled(Slider)`
    .slick-slide div{
        cursor: pointer;
        width: 100%;
        height: 240px;
        margin: 0 auto;
        background: linear-gradient(95.18deg, #6400FF 0.47%, #E3D1FF 102.52%, #D0B1FF 102.52%);
        border: 4px solid #FFFFFF;
        box-sizing: border-box;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
        border-radius: 10px;
        background-repeat: no-repeat;
        font-family: "FontGame";
    }

    .slick-dots{
        padding-top: -40px;
    }


`

const Carousel = styled.p`
    width: 100%;
    height: 50px;
    font-family: 'SUIT';
    font-weight: 800;
    font-size: 50px;
    line-height: 50px;

    text-align: center;
    letter-spacing: -0.03em;
    padding-top: 80px;
    color: #FFFFFF;

`



export default function Sliders(){

    const settings = {
        dots: true,
        arrows:false,
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
                        <Carousel>Carousel</Carousel>
                        <Carousel>Carousel</Carousel>
                        <Carousel>Carousel</Carousel>
                    </SimpleSlider>
            </Wrapper>
        );
    
    }


