import LayoutBanner from "./banner";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";
import LayoutFooter from "./footer";
import styled from "@emotion/styled";
import { ReactNode } from "react";
import { useRouter } from "next/router";
import LayoutSidebar from "./sidebar/index";

const BodyWrapper = styled.div`
  display: flex;
`;

const Body = styled.div`
  width: 100%;
  background-color: white;
`;

interface ILayoutProps {
  children: ReactNode;
}

const HIDDEN_HEADERS = ["/11-quiz"];

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  console.log(router);

  const isHidden = HIDDEN_HEADERS.includes(router.asPath);

  return (
    <>
      <LayoutHeader />
      <LayoutBanner />
      <LayoutNavigation />
      <BodyWrapper>
        <div>{!isHidden && <LayoutSidebar />}</div>
        <Body>{props.children}</Body>
      </BodyWrapper>
      <LayoutFooter />
    </>
  );
}
