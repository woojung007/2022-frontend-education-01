import styled from "@emotion/styled";
// import { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Wrapper = styled.div`
  height: 500px;
  background-color: pink;
`;

const SimpleSlider = styled(Slider)`
  .slick-slide div {
    outline: none;
    cursor: pointer;
  }
`;

const Img = styled.img`
  width: 800px;
  height: 500px;
  margin-left: 1500px;
  margin: auto;
`;

export default function Sliders() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
  };

  return (
    <Wrapper>
      <Slider {...settings}></Slider>
    </Wrapper>
  );
}
