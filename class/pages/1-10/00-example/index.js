export default function returnSayHi() {
  function sayHi(e) {
    alert("안녕하세요");
  }

  return (
    <div>
      <button onClick={sayHi}>HI</button>
    </div>
  );
}
