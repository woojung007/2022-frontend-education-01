import { useRouter } from "next/router";
import { MouseEvent, Fragment } from "react";
import styled from "@emotion/styled";

const NAVIGATION_MENUS = [
  { name: "MARKET", page: "/" },
  { name: "BEST", page: "/useditem/best" },
  { name: "SELL", page: "/useditem/new" },
  { name: "MYPAGE", page: "/user/myPage" },
];

const Wrapper = styled.div`
  height: 64px;
  background-color: #d9cdbf;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: #403f3f;
`;

const MenuItem = styled.div`
  margin: 0px 60px;
  cursor: pointer;

  :hover {
    color: #f0f2ae;
  }
`;

export default function Navigation() {
  const router = useRouter();

  const onClickMenu = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof Element) router.push(event.target.id);
  };

  return (
    <Wrapper>
      {NAVIGATION_MENUS.map((el) => (
        <Fragment key={el.page}>
          <MenuItem id={el.page} onClick={onClickMenu}>
            {el.name}
          </MenuItem>
        </Fragment>
      ))}
    </Wrapper>
  );
}
