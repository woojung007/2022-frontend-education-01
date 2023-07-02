/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
export default function TypescriptPage() {
  // 타입 추론
  const aaa = "Hi";
  // aaa = 3

  // 타입 명시
  const bbb: string = "Hi";

  // 문자 타입
  let ccc: string;
  ccc = "hi";

  // 숫자 타입
  const ddd: number = 10;
  // ddd = "sdf"

  // 불린타입
  let eee: boolean = true;
  eee = false;
  // eee = "true"   //true 로 작동함

  // 배열타입
  // let fff:number[] = [1,2,3,4,5,"hi"]
  // let ggg: string[] = ["john", "hey", 13]
  const hhh: (number | string)[] = [1, 2, 3, 4, 5, "hi"];

  // 객체타입
  interface IProfile {
    name: string;
    age: string | number;
    school: string;
    hobby?: string;
  }

  const profile: IProfile = {
    name: "철수",
    age: 8,
    school: "다람쥐초등학교",
  };

  profile.age = "8살";

  // 함수타입
  const add = (money1: number, money2: number, unit: string): string => {
    return money1 + money2 + unit;
  };
  const result = add(1000, 2000, "원");

  return <div> 타입스크립트 연습하기</div>;
}
