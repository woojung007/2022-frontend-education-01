// 1. any 타입 (그냥 자바스크립트랑 같음)

const getAny = (args: any) => {
  return args + 2;
};

const result1 = getAny("철수");

// 2. unknown 타입 (개발자에게 안전하게 코딩하도록 유도!!)

const getUnknown = (args: unknown) => {
  if (typeof args === "number") {
    return args + 2;
  } else {
    return "숫자를 넣어주세요!!!";
  }
};

const result2 = getUnknown("철수");

// any는 아무거나 다 받는다 - 자바스크립트랑 같다
// unknown에 들어는 갈 수 있다 - 타입을 현재는 모른다 - 상황에 따라 작성을 해줘야 한다
// 가급적이면 unknown으로 사용하자
// 결과에 대한 예측도 가능하다
