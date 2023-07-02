import styled from "@emotion/styled";
import { gql, useQuery } from "@apollo/client";

const FETCH_USED_ITEMS_I_PICKED = gql`
  query fetchUseditemsIPicked($search: String, $page: Int) {
    fetchUseditemsIPicked(search: $search, page: $page) {
      _id
      name
      remarks
      price
      images
      seller {
        name
      }
    }
  }
`;
const MyPageListWrapper = styled.div`
  width: 100%;
  padding: 50px 180px 80px 80px;
`;

const TopWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MenuClickWrapper = styled.div`
  width: 30%;
  padding-left: 60px;
  display: flex;
`;
const ClickMenu = styled.span`
  width: 40%;
  padding-left: 40px;
  :hover {
    font-weight: 600;
    text-decoration: underline 3px #f0f2ae;
  }
`;
const SearchWrapper = styled.div`
  width: 40%;
`;
const SearchInput = styled.input`
  width: 370px;
  height: 52px;
  border: 2px solid #f0f2ae;
  padding-left: 15px;
  margin-right: 20px;
`;
const SearchBtn = styled.button`
  width: 80px;
  height: 52px;
`;
const PickWrapper = styled.div`
  width: 100%;
`;

const PickTitle = styled.div`
  font-size: 20px;
  padding: 60px 0 20px 80px;
`;
const PickDiv = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-top: 20px;
  border-bottom: 1px solid #ebebeb;
`;
const PickImg = styled.img`
  width: 100px;
  height: 100px;
`;
const PickListDiv = styled.div`
  padding-left: 30px;
  display: flex;
  align-items: center;
`;

const PickList = styled.div`
  padding-left: 10px;
  padding-right: 20px;
`;

function MyProductPage() {
  const { data } = useQuery(FETCH_USED_ITEMS_I_PICKED, {
    variables: {
      search: "",
      page: 1,
    },
  });
  console.log("fetch", data);

  return (
    <MyPageListWrapper>
      <TopWrapper>
        <MenuClickWrapper>
          <ClickMenu>나의 상품</ClickMenu>
          <span>|</span>
          <ClickMenu>마이찜</ClickMenu>
        </MenuClickWrapper>
        <SearchWrapper>
          <SearchInput placeholder="필요한 내용을 검색해주세요." />
          <SearchBtn>검색</SearchBtn>
        </SearchWrapper>
      </TopWrapper>

      <div>
        <PickTitle>찜 목록</PickTitle>
        <PickWrapper>
          {data?.fetchUseditemsIPicked.map((el: any) => (
            <PickDiv key={el._id}>
              <PickImg
                src={
                  el.images[0] || el.images[1]
                    ? `https://storage.googleapis.com/${el.images[0]}`
                    : "/images/no-image.png"
                }
              />
              <PickListDiv>
                <PickList>상품명 : {el.name}</PickList>
                <PickList>판매자 : {el.seller.name}</PickList>
                <PickList>{el.price} P</PickList>
              </PickListDiv>
            </PickDiv>
          ))}
        </PickWrapper>
      </div>
    </MyPageListWrapper>
  );
}

export default MyProductPage;
