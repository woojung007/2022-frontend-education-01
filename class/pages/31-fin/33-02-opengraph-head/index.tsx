import Head from "next/head";

export default function OpenGraphHeadPage() {
  return (
    <div>
      <Head>
        {/* og : openGraph */}
        {/* 제공해주는 입장 */}
        <meta property="og:title" content="우정이의 사이트" />
        <meta
          property="og:description"
          content="우정이의 사이트에 오신것을 환영합니다!!"
        />
        <meta
          property="og:image"
          content="https://s.pstatic.net/static/www/mobile/edit/20220426/cropImg_196x196_92891881896313317.jpeg"
        />
        {/* meta - 내 사이트를 알릴때 사용 */}
      </Head>
      <h1>오픈그래프 연습 페이지</h1>
    </div>
  );
}
