import { GraphQLClient, gql } from "graphql-request";

const RESTORE_ACCESS_TOKEN = gql`
  mutation restoreAccessToken {
    restoreAccessToken {
      accessToken
    }
  }
`;

export async function getAccessToken() {
  try {
    // 2-1. refreshToken으로 accessToken을 재발급 받기
    // 아직 apollo 세팅 안돼서 사용 못함 / axios, XMLHttpRequest등 만 사용 가능
    // graphql-request : apollo 없이 graphql 사용하는 방법
    // https://www.npmjs.com/package/graphql-request

    const graphQLClient = new GraphQLClient(
      // http -> https 로 바뀌어야 한다
      "https://backend06.codebootcamp.co.kr/graphql",
      { credentials: "include" }
    );

    const result = await graphQLClient.request(RESTORE_ACCESS_TOKEN);
    const newAccessToken = result.restoreAccessToken.accessToken;
    return newAccessToken;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
  }
}
