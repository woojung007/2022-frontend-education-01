import LayoutBanner from "./banner";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";
import LayoutFooter from "./footer";
import styled from "@emotion/styled";
import { ReactNode } from "react";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;
const BodyWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const Body = styled.div`
  width: 100%;
  height: auto;
`;

interface ILayoutProps {
  children: ReactNode;
}

const HIDDEN_BANNER = ["/boards/new", "/user/login", "/user/signup"];
const HIDDEN_NAV = ["/boards/new", "/user/login", "/user/signup"];

export default function Layout(props: ILayoutProps) {
  const router = useRouter();

  const isHiddenBanner = HIDDEN_BANNER.includes(router.asPath);
  const isHiddenNav = HIDDEN_NAV.includes(router.asPath);

  return (
    <Wrapper>
      <LayoutHeader />
      {!isHiddenBanner && <LayoutBanner />}
      {!isHiddenNav && <LayoutNavigation />}
      <BodyWrapper>
        <Body>{props.children}</Body>
      </BodyWrapper>
      <LayoutFooter />
    </Wrapper>
  );
}
