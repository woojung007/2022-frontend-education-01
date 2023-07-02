import { request, gql } from "graphql-request";
import Head from "next/head";
import { useRouter } from "next/router";

export default function BoardDetailPage(props) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <meta property="og:title" content={props.myboardData?.title} />
        <meta property="og:description" content={props.myboardData?.contents} />
        <meta property="og:image" content={props.myboardData?.image[0]} />
      </Head>
      <div>
        안녕하세요! 게시글 상세페이지 입니다!!!, 게시글 ID는{" "}
        {router.query.boardId}입니다!!
      </div>
    </div>
  );
}

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      title
      contents
      images
    }
  }
`;

// 이 페이지는 서버사이드 렌더링 할래!!
// SSR해주는 함수 - page 에서만 쓸 수 있다 - 함수 이름 변경 불가
// SSR 하면 데이터
export const getServerSideProps = async (context) => {
  // 데이터를 요청할 것 !!!
  // request에서는 variables 안써도 됌
  // const { data } = useQuery(FETCH_BOARD); << 이건 안됌

  const result = await request(
    "https://backend06.codebootcamp.co.kr/graphql",
    FETCH_BOARD,
    {
      boardId: context.query.boardId,
    }
  );
  return {
    props: {
      myboardData: {
        title: result.fetchBoard.title,
        contents: result.fetchBoard.contents,
        images: result.fetchBoard.images,
      },
    },
  };
};
