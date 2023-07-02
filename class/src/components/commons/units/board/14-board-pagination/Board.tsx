import styled from "@emotion/styled";

const MyRow = styled.div`
  display: flex;
`;

const MyColumn = styled.div`
  /* width: 25%; */
`;

export default function Board(props: any) {
  return (
    <>
      {props.data?.fetchBoards.map((el: any, index: any) => (
        <MyRow key={el._id}>
          <MyColumn>
            <input type="checkbox" />
          </MyColumn>
          <MyColumn>{el.number}</MyColumn>
          <MyColumn>{index + 1}</MyColumn>
          <MyColumn>{el.writer}</MyColumn>
        </MyRow>
      ))}
    </>
  );
}
