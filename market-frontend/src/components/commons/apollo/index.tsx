import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
  fromPromise,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { useRecoilState, useRecoilValueLoadable } from "recoil";

import { useEffect } from "react";
import { onError } from "@apollo/client/link/error";

import { accessTokenState, restoreAccessTokenLoadable } from "../store/index";
import { getAccessToken } from "../libraries/getAccessToken";

export default function ApolloSetting(props: any) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const isLoaded = useRecoilValueLoadable(restoreAccessTokenLoadable);

  // useEffect(() => {
  //   getAccessToken().then((newAccessToken) => {
  //     setAccessToken(newAccessToken);
  //   });
  // }, []);

  //   useEffect(() => {
  //     setIsLoaded(true)
  //     getAccessToken().then((newAccessToken)=>{
  //       setAccessToken(newAccessToken)
  //       setIsLoaded(false)
  //     })
  // }, []);

  useEffect(() => {
    isLoaded.toPromise().then((newAccessToken) => {
      setAccessToken(newAccessToken);
    });
  }, []);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        if (err.extensions.code === "UNAUTHENTICATED") {
          return fromPromise(
            getAccessToken().then((newAccessToken) => {
              setAccessToken(newAccessToken);
              operation.setContext({
                headers: {
                  ...operation.getContext().headers,
                  Authorization: `Bearer ${newAccessToken}`,
                },
              });
            })
          ).flatMap(() => forward(operation));
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://backend06.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
    credentials: "include",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]),
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
