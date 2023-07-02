import { AppProps } from 'next/app';
import { Global } from '@emotion/react';
import 'antd/dist/antd.css';
import { RecoilRoot} from 'recoil';
import ApolloSetting from '../src/components/commons/apollo/index';
import Layout from '../src/components/commons/libraries/layout/index';
import { globalStyles } from '../src/commons/types/generated/styles/globalStyles';



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
  )
}

export default MyApp;