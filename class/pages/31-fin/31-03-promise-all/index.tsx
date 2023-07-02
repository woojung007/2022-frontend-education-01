export default function PromiseAllPage() {
  const onClickPromise = async () => {
    console.time("Promise 시작!!!");
    const result1 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        // 끝나려면
        resolve("https://dog1.jpg");
        // 에러나면 reject
      }, 3000);
    });
    console.log(result1);
    // async, await이 나오게됨
    // .then(res => res)

    const result2 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("https://dog2.jpg");
      }, 1000);
    });
    console.log(result2);

    const result3 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("https://dog3.jpg");
      }, 2000);
    });
    console.log(result3);
    console.timeEnd("Promise 시작!!!");
    // 6초 정도 걸림
  };

  const onClickPromiseAll = async () => {
    //     console.time("PromiseAll 시작 !!");

    // 1. 하나하나씩 확인하는 방법 !!
    // 동시에 실행시키고 싶은 **배열** 다 넣어줘 = result에 담았다
    // const result = await Promise.all([
    //   new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       // 끝나려면
    //       resolve("https://dog1.jpg");
    //       // 에러나면 reject
    //     }, 3000);
    //   }),
    //   new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve("https://dog2.jpg");
    //     }, 3000);
    //   }),
    //   new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve("https://dog3.jpg");
    //     }, 3000);
    //   }),
    // ]);
    // console.log(result);
    // console.timeEnd("PromiseAll 시작 !!");
    // // 3초 정도 걸림

    // 2. 한방에 확인하는 방법
    // return 이 있으면 map , 없으면 forEach
    console.time("PromiseAll 시작 !!");
    const result = await Promise.all(
      ["https://dog1.jpg", "https://dog1.jpg", "https://dog3.jpg"].map(
        (el) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(el);
            }, 3000);
          })
      )
    );
    console.log(result);
    console.timeEnd("PromiseAll 시작 !!");
  };

  return (
    <div>
      <button onClick={onClickPromise}>Promise 연습하기</button>
      <button onClick={onClickPromiseAll}>Promise.all 연습하기</button>
    </div>
  );
}
