import styled from "@emotion/styled";
import { useState } from "react";

const MyRow = styled.div`
  display: flex;
`;

const MyColumn = styled.div`
  width: 25%;
`;

export default function BoardCommentItem(props: any) {
  // true, false 불린값을 각각의 컴포넌트에 넣어줌
  const [isEdit, setIsEdit] = useState(false);

  const onClickEdit = () => {
    setIsEdit(true);
  };

  return (
    <div>
      {isEdit === false && (
        <MyRow>
          <MyColumn>
            <input type="checkbox" />
          </MyColumn>
          <MyColumn>{props.el._id}</MyColumn>
          <MyColumn>{props.el.index + 1}</MyColumn>
          <MyColumn>{props.el.writer}</MyColumn>
          <button onClick={onClickEdit}>수정</button>
        </MyRow>
      )}
      {isEdit === true && <div>수정하기 화면입니다</div>}
    </div>
  );
}
