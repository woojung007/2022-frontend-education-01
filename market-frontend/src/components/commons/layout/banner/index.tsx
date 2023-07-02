import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Wrapper = styled.div`
  width: 100%;
`;

const SimpleSlider = styled(Slider)`
  .slick-slide div {
    cursor: pointer;
    width: 100%;
    height: 40vh;
    margin: 0 auto;
    background: #d9cdbf;
    /* background-image: url("/images/banner.jpeg") ; */
    background-repeat: no-repeat;
    font-family: "FontGame";
  }
`;

export default function Sliders() {
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
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </SimpleSlider>
    </Wrapper>
  );
}
