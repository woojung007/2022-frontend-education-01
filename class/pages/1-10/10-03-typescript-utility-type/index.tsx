/* eslint-disable no-unused-vars */
export default function TypescriptPage() {
  // 객체타입
  interface IProfile {
    name?: string;
    age: number;
    school?: string;
    hobby?: string;
  }

  // 1. Pick type
  type Mytype1 = Pick<IProfile, "name" | "age">;

  // 2. Omit type
  type Mytype2 = Omit<IProfile, "school">;

  // 3. Partial type
  type Mytype3 = Partial<IProfile>;

  // 4. Required type
  type Mytype4 = Required<IProfile>;

  // 5. Record type   정해놓은것만 사용가능 - Union type
  type ZZZ = "aaa" | "qqq" | "rrr";

  // let apple: ZZZ
  // apple = "aaa"
  type Mytype5 = Record<ZZZ, IProfile>;

  //= == 추가 (선언병합) - (type vs interface) ===
  type INewProfileType = IProfile & {
    candy: number;
  };

  const profile: INewProfileType = {
    candy: 3,
    age: 10,
    hobby: "asdf",
  };

  return <div> 타입스크립트 utility type 연습하기</div>;
}
