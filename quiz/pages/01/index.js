import styled from "@emotion/styled";

export default function AAAPage() {
  // 여기는 자바스크립트 쓰는 곳

  const Container = styled.div`
    width: 640px;
    height: auto;
    padding-left: 50px;
    padding-top: 36px;
    position: absolute;
    /* border: 1px solid #000; */
  `;

  const BigTitle = styled.div`
    width: 71px;
    height: 43px;
    margin: 40px 91px 60px 50px;
    font-family: SpoqaHanSans;
    font-size: 40px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.07;
    letter-spacing: -1.33px;
    color: #1f1f1f;
  `;

  const SearchIcon = styled.img`
    width: 32px;
    height: 32px;
    position: relative;
    top: 36px;
    left: 530px;
  `;

  const Profile = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  `;

  const UserPhoto = styled.img`
    width: 60px;
    height: 60px;
    margin-right: 12px;
  `;

  const ContentDiv = styled.div`
    width: 490px;
  `;

  const Name = styled.div``;

  const ArrowRight = styled.img`
    width: 28px;
    height: 28px;
  `;

  const NavDiv = styled.div`
    width: 490px;
    height: 50px;
    display: flex;
    flex-direction: row;
  `;

  const NavTitle = styled.div`
    width: 112px;
    height: 32px;
    font-size: 30px;
    color: #cacaca;
  `;

  const FAQtitle = styled.div`
    margin: 14px 0 0;
    font-family: SpoqaHanSans;
    font-size: 18px;
    line-height: 1.58;
    color: #adadad;
  `;

  const FAQquestion = styled.div`
    width: 490px;
    height: 26px;
    font-size: 24px;
    color: #444;
    padding-bottom: 50px;
  `;

  const MoreIcon = styled.div``;

  const Footer = styled.div`
    width: 490px;
    height: 96px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `;

  const MenuDiv = styled.div`
    width: 58px;
    height: 78px;
  `;

  const MenuText = styled.div`
    text-align: center;
    line-height: 34px;
    color: #adadad;
  `;

  const MenuImg = styled.img`
    width: 58px;
  `;

  return (
    <Container>
      <SearchIcon src="../../search.png"></SearchIcon>

      <BigTitle>마이</BigTitle>

      <Profile>
        <UserPhoto src="../../profile.png"></UserPhoto>
        <Name>임정아</Name>
        <ArrowRight src="../../arrow-right.png"></ArrowRight>
      </Profile>

      <NavDiv>
        <NavTitle>공지사항</NavTitle>
        <NavTitle>이벤트</NavTitle>
        <NavTitle>FAQ</NavTitle>
        <NavTitle>QnA</NavTitle>
      </NavDiv>

      <hr></hr>
      <ContentDiv>
        <div>
          <FAQtitle>Q.01</FAQtitle>
          <FAQquestion>리뷰 작성은 어떻게 하나요?</FAQquestion>
          <MoreIcon></MoreIcon>
        </div>

        <div>
          <FAQtitle>Q.02</FAQtitle>
          <FAQquestion>리뷰 수정/삭제는 어떻게 하나요?</FAQquestion>
          <MoreIcon></MoreIcon>
        </div>

        <div>
          <FAQtitle>Q.03</FAQtitle>
          <FAQquestion>아이디/비밀번호를 잊어버렸어요.</FAQquestion>
          <MoreIcon></MoreIcon>
        </div>

        <div>
          <FAQtitle>Q.04</FAQtitle>
          <FAQquestion>회원탈퇴를 하고싶어요.</FAQquestion>
          <MoreIcon></MoreIcon>
        </div>

        <div>
          <FAQtitle>Q.05</FAQtitle>
          <FAQquestion>출발지 설정은 어떻게 하나요?</FAQquestion>
          <MoreIcon></MoreIcon>
        </div>

        <div>
          <FAQtitle>Q.06</FAQtitle>
          <FAQquestion>비밀번호를 변경하고 싶어요.</FAQquestion>
          <MoreIcon></MoreIcon>
        </div>
      </ContentDiv>

      <Footer>
        <MenuDiv>
          <MenuImg src="../../home.png"></MenuImg>
          <MenuText>홈</MenuText>
        </MenuDiv>

        <MenuDiv>
          <MenuImg src="../../location.png"></MenuImg>
          <MenuText>잇츠로드</MenuText>
        </MenuDiv>

        <MenuDiv>
          <MenuImg src="../../heart.png"></MenuImg>
          <MenuText>마이찜</MenuText>
        </MenuDiv>

        <MenuDiv>
          <MenuImg src="../../user.png"></MenuImg>
          <MenuText>마이</MenuText>
        </MenuDiv>
      </Footer>
    </Container>
  );
}
