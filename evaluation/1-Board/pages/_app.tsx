import {ApolloClient, ApolloProvider,InMemoryCache,ApolloLink} from '@apollo/client'
import { AppProps } from 'next/app';
import { Global } from '@emotion/react';
import 'antd/dist/antd.css';
import { createUploadLink } from 'apollo-upload-client';
import Layout from '../src/components/commons/libraries/layout/index';
import { globalStyles } from '../src/commons/types/generated/styles/globalStyles';




function MyApp({ Component, pageProps }: AppProps) {

  const uploadLink = createUploadLink({
    uri: "http://backend06.codebootcamp.co.kr/graphql",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client = {client}>
      <Global styles={globalStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
    </ApolloProvider>
  )
}

export default MyApp;