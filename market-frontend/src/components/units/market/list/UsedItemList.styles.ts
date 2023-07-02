import styled from "@emotion/styled";

export const BodyHTML = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 0 100px 20px 100px;
  margin-top: 101px;
  margin-bottom: 100px;
`;

export const SearchDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  padding: 40px 80px 40px 40px;
`;

export const SearchInput = styled.input`
  width: 60%;
  height: 52px;
  border: none;
  border-bottom: 2px solid #d9cdbf;
  padding-left: 30px;
  margin-right: 40px;
`;

export const SearchDateInput = styled.input`
  width: 20%;
  height: 52px;
  border: 1px solid #d9cdbf;
  font-weight: 400;
  font-size: 12px;
  line-height: 24px;
  text-align: center;
  color: #bdbdbd;
  padding-left: 10px;
`;

export const ListDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ListBottomDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 50px;
`;

export const BoardWriteBtn = styled.button`
  width: 171px;
  height: 52px;
  color: #8c775e;
  background-color: #fff;
  border: 1px solid #8c775e;
  box-sizing: border-box;
  border-radius: 10px;
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  :hover {
    background-color: #f0f2ae;
    border: none;
    color: #0d0000;
  }
`;
