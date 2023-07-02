import { memo } from "react";

function MemoizationPresenterPage(props: any) {
  console.log("프리젠터가 렌더링 됩니다");
  return (
    <div>
      <div>=================================</div>
      <h1>이것은 프리젠터 입니다!!</h1>
      <div>=================================</div>
    </div>
  );
}

// memo - HOF
export default memo(MemoizationPresenterPage);

// 메모를 남용하면 안된다
// 어디에 저장해놓는 것이기 때문
