import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { IBoard } from "../../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

const MyRow = styled.div`
  display: flex;
`;

const MyColumn = styled.div`
  width: 25%;
`;

export default function BasketPage() {
  const { data } = useQuery(FETCH_BOARDS);

  const onClickBasket = (el: any) => () => {
    console.log(el);
    // 새로고침이 아니라 계속계속 추가 시키고 싶다
    // 객체 또는 배열을 만든다

    // 1. 기존 장바구니 가져오기
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]"); // 빈값이면 어떡할래??

    // 2. 이미 담겼는지 확인하기
    //
    // 삭제하고 싶다면 - 담겼다? 그러면 반대로 필터해서
    // 배스킷아이디랑 선택한 아이디랑 다른것들만 필터해서 나머지들만 필터 해서
    // setItem()
    //
    // 이미 장바구니 물품(el)이 있으면 경고하기 - temp에 임시로 잠깐 담아둔다
    const temp = baskets.filter((basketEl: any) => basketEl._id === el._id);
    if (temp.length === 1) {
      alert("이미 담으신 물품입니다");
      return; // 아래는 실행이 안된다
    } // break - for 문 종료할 때 사용

    // 3. 장바구니에 담기
    const { __typename, ...newEl } = el;
    // 기존데이터에 합쳐진 새 배열이 생긴다
    baskets.push(newEl);

    localStorage.setItem("baskets", JSON.stringify(baskets));
  };

  return (
    <div>
      {/* fetchBoard로 yarn generate - codegen 으로 받아온 타입 */}
      {data?.fetchBoards.map((el: IBoard) => (
        <MyRow key={el._id}>
          <MyColumn>{el.title}</MyColumn>
          <MyColumn>{el.writer}</MyColumn>
          <button onClick={onClickBasket(el)}>장바구니 담기</button>
        </MyRow>
      ))}
    </div>
  );
}

// generic - 라이브러리 만들 떄 주로 사용
// 브라우저 저장소
// 브라우저 - 로컬, 세션
// 쿠키 - 서버랑 데이터 주고받고 가능
// 리프레시 토큰
// 오늘 본 상품 목록
