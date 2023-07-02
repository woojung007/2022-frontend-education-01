//데코레이터는 뭘까요?
function qqq(aaa: any) {
  console.log("=================");
  console.log(aaa);
  console.log("================");
}

@qqq
class Product {}
