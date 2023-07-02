export default function EventLoopPage() {
  // 싸이월드 때 !
  // setTimeout(() => {
  //     console.log("안녕하세요")
  // },1000)

  // setInterval(()=>{
  //     document.getElementById("timer")?.innerText = "59:30"
  // },1000)

  const onClickTimer = () => {
    console.log("======= 시작 !!! ======");
    setTimeout(() => {
      console.log("1초뒤에 실행될 거에요!!!");
    }, 1000);

    console.log("======= 끝 !!! ======");
  };
  return <button onClick={onClickTimer}>setTImeout 실행시키기</button>;
}
