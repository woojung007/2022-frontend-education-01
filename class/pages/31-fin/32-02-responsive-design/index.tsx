import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 62.5rem; // 62.5rem = 1000px
  height: 100px;
  background-color: violet;

  @media (min-width: 768px) and (max-width: 991px) {
    width: 500px;
    height: 500px;
    background-color: green;
  }
  @media (max-width: 767px) {
    width: 100px;
    height: 100px;
    background-color: blue;
  }
`;
export default function ResponsiveDesignPage() {
  return <Wrapper>상자</Wrapper>;
}

// 반응형 선택 기준
// 1. 가장 많은 기종 중 가장 작은거
// rem 단위 (바디태그의 폰트사이즈에 의존 ) 사용
// px to rem
// https://nekocalc.com/px-to-rem-converter
// em 단위 (부모 태그 사이즈에 의존)
