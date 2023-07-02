// 1. 문자 타입
const getString = (arg: string): string => {
  return arg;
};

const result3 = getString("철수");

// return 되는 값의 타입은 (aaa:string):string
// (매개변수) 뒤에 적어준다

// 2. 숫자 타입
const getNumber = (arg: number): number => {
  return arg;
};

const result4 = getNumber(8);

// 3. any 타입

const getAny2 = (arg: any): any => {
  return arg;
};

const result5 = getAny("철수");
const result6 = getAny(8);
const result7 = getAny(true);

// any 는 타입이 뭔지 모른다
// 이걸 보완하고자 나온것이 제네릭이다

// 4. any 타입2 - getAnys
const getAnys = (arg1: any, arg2: any, arg3: any): [any, any, any] => {
  return [arg3, arg2, arg1];
};

const result8 = getAnys("철수", "다람쥐초등학교", 8);

// 5. generic 타입 (들어온 타입을 그대로 사용)

function getGeneric<MyType>(arg: MyType): MyType {
  return arg;
}

const aaa: string = "철수";
const bbb: number = 8;
const ccc: boolean = true;

const result9 = getGeneric(aaa);
const result10 = getGeneric(bbb);
const result11 = getGeneric(ccc);

//
//
// 6. generic 타입 2
function getGenerics<MyType1, MyType2, MyType3>(
  arg1: MyType1,
  arg2: MyType2,
  arg3: MyType3
): [MyType3, MyType2, MyType1] {
  return [arg3, arg2, arg1];
}

const result12 = getGenerics("철수", "다람쥐초등학교", 8);

// 7. generic 타입 - 축약1
// prettier-ignore
function getGenericsT<T1, T2, T3>(
  arg1: T1,
  arg2: T2,
  arg3:T3
): [T3, T2, T1] {
  return [arg3, arg2, arg1];
}

const result13 = getGenericsT("철수", "다람쥐초등학교", 8);

// 8. generic 타입 - 축약
// prettier-ignore
function getGenericsTUV<T, U, V>(
    arg1: T,
    arg2: U,
    arg3: V
  ): [V, U, T]{
    return [arg3, arg2, arg1];
  }

const result14 = getGenericsTUV("철수", "다람쥐초등학교", 8);

// 9. useState에서의 generic!!!
// const [school, setSchool] = useState<string>("다람쥐초등학교");
// const apple: number = "철수";
//

// 10. 화살표 함수 에서의 generic !!!
// const getGenericsTUV<T, U, V>(
//     arg1: T,
//     arg2: U,
//     arg3: V
//   ): [V, U, T] => {
//     return [arg3, arg2, arg1];
//   }
