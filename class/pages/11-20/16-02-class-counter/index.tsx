import { Component } from "react";

interface IState {
  count: number;
}

// extends Component - 컴포넌트 기능을 가진 Class
export default class CounterPage extends Component {
  // 리액트에서 제공해주는 Component에 내장된 기능(이름 변경 불가, Component로 확장해야 사용가능)
  state = {
    count: 0,
  };

  // 화살표 함수로 변경해야 lexical 언어적인 this(class) 로 인식할 수 있다.
  onClickCounter = () => {
    console.log("카운터 click!!!");
    // 마우스로 클릭해서 실행시키는 this이기 때문에 class가 아니라 window 라고 인식하게 된다. this의 실행 환경이 달라진다는 뜻이다.
    // 그래서 화살표함수로 바꿔주거나 bind()를 사용해줘야 한다.
    console.log(this.state.count);

    // class가 객체이기 때문에 this.setState로 작성해야 함
    // this - 동적 스코프(누가 실행을 시켰느냐에 따라서 값이 매번 달라진다.)
    //
    this.setState((prev: IState) => ({
      count: prev.count + 1,
    }));
  };

  // 그림그리기 - 리액트에서 제공해주는 Component에 내장된 기능(이름 변경 불가, Component로 확장해야 사용가능)
  render() {
    return (
      <div>
        {/* this - 지금 이 class 자체를 의미한다. */}
        <div>현재카운트: {this.state.count}</div>
        {/* 이 this를 onClickCounter 함수에 바인딩(.bind()) 해줘라는 의미이다. */}
        <button onClick={this.onClickCounter.bind(this)}>
          카운트 올리기 !!!
        </button>
      </div>
    );
  }
}
