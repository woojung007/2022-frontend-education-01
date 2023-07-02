import styled from "../../styles/emotion";

export default function AAAPage() {
  const Container = styled.div`
    width: 400px;
    height: 350px;
  `;

  // css 속성만 넣기
  const MyTitle = styled.div`
    text-align: center;
    font-weight: bold;
  `;

  const Title2 = styled.div`
    font-size: 9px;
    font-weight: bold;
  `;

  const MyEmail = styled.input`
    width: 200px;
  `;

  // 여기는 자바스크립트 쓰는 곳
  return (
    <Container>
      <MyTitle>로그인</MyTitle>

      <Title2>이름</Title2>
      <MyEmail type="text" />

      <Title2>이메일</Title2>
      <MyEmail type="text" />
    </Container>
  );
}
