import { AppProps } from "next/app";
import { Global } from "@emotion/react";
import Layout from "../src/commons/libraries/layout/index";
import { globalStyles } from "../src/commons/styles/globalStyles";
import "antd/dist/antd.css";
import { RecoilRoot } from "recoil";
import ApolloSetting from "../src/components/commons/apollo/index";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ApolloSetting>
        <Global styles={globalStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloSetting>
    </RecoilRoot>
  );
}

export default MyApp;
