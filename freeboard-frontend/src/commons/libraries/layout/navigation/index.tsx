import { useRouter } from "next/router";
import { MouseEvent, Fragment } from "react";
import styled from "@emotion/styled";

const NAVIGATION_MENUS = [
  { name: "파이어베이스게시판", page: "/myfirebase" },
  { name: "디즈니OpenAPI", page: "/boards/openapi" },
  { name: "라이브게시판", page: "/boards" },
  { name: "라이브상품", page: "/markets" },
  { name: "마이페이지", page: "/mypages" },
];

const Wrapper = styled.div`
  height: 64px;
  background-color: #888;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: white;
`;

const MenuItem = styled.div`
  margin: 0px 60px;
  cursor: pointer;

  :hover {
    color: orange;
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
