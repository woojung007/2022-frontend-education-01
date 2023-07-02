import { gql, useApolloClient } from "@apollo/client";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

export default function LoginSuccessPage() {
  // 버튼을 눌렀을 때 쿼리가 일어나도록 할 수 있는 것 : useApolloClient
  const client = useApolloClient();

  // 백엔드에서 인가(토큰 확인하기)가 이루어진다
  const onClickButton = async () => {
    const result = await client.query({
      query: FETCH_USER_LOGGED_IN,
    });
    console.log(result);
  };

  // 버튼을 클릭했을 때 api 요청을 하고 쿼리가 일어남
  return <button onClick={onClickButton}>클릭하세요</button>;
}
