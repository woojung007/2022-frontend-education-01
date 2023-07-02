import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
// import "bootstrap/scss/bootstrap.scss";
// import "bootstrap/dist/css/bootstrap.min.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { RecoilRoot } from "recoil";
import ApolloSetting from "../src/components/commons/apollo";
import { AppProps } from "next/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-d_kQQt5eRcb0OMNB1NJ3LfftoTDMPyk",
  authDomain: "site007-376c1.firebaseapp.com",
  projectId: "site007-376c1",
  storageBucket: "site007-376c1.appspot.com",
  messagingSenderId: "408619288042",
  appId: "1:408619288042:web:a107c4fb45f785affe1e93",
  measurementId: "G-W95V0840T7",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

function MyApp({ Component, pageProps }: AppProps) {
  // type: AppProps
  return (
    <div>
      {/* <Head>
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=49d7bc1bb0773f8853f0c0f71370b1dc"
        ></script>
      </Head>
      <Script src="" /> */}

      <RecoilRoot>
        <ApolloSetting>
          <Global styles={globalStyles} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ApolloSetting>
      </RecoilRoot>
    </div>
  );
}

export default MyApp;
