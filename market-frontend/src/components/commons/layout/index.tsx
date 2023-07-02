import LayoutBanner from "./banner";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";
import styled from "@emotion/styled";
import { ReactNode } from "react";
import { useRouter } from "next/router";
import LayoutSidebar from "./sidebar/index";
import Head from "next/head";

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

const HIDDEN_BANNER = ["/boards/new", "/user/login"];
const HIDDEN_NAV = ["/boards/new", "/user/login"];
const HIDDEN_SIDEBAR = ["/user/myPage"];
const HIDDEN_MYPAGESIDE = ["/user/myPage", "/user/myPage/myProduct"];

export default function Layout(props: ILayoutProps) {
  const router = useRouter();

  let isHidden = HIDDEN_BANNER.includes(router.asPath);
  isHidden = HIDDEN_NAV.includes(router.asPath);
  isHidden = HIDDEN_SIDEBAR.includes(router.asPath);
  isHidden = HIDDEN_MYPAGESIDE.includes(router.asPath);

  return (
    <Wrapper>
      <LayoutHeader />
      {!isHidden && <LayoutBanner />}
      {!isHidden && <LayoutNavigation />}
      <BodyWrapper>
        {isHidden && <LayoutSidebar />}
        <Body>
          <Head>
            <link
              rel="shortcut icon"
              href="data:image/x-icon;,"
              type="image/x-icon"
            />
          </Head>

          {props.children}
        </Body>
      </BodyWrapper>
    </Wrapper>
  );
}
