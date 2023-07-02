import { Component, createRef } from "react";
import Router from "next/router";

interface IState {
  count: number;
}

export default class CounterPage extends Component {
  inputRef = createRef<HTMLInputElement>();
  state = {
    count: 99,
  };

  //   1. DidMount
  componentDidMount() {
    console.log("마운트 됨!!!!!!");
    // 포커스 깜빡깜빡
    this.inputRef.current?.focus();
  }

  // 2. DidUpdate
  componentDidUpdate() {
    console.log("수정되고 다시 그려짐!!!!!!");
  }

  // 3. WillUnmount
  componentWillUnmount() {
    console.log("컴포넌트 사라짐!!!!");
    // 채팅방 나가기
    // api 요청 !!!
  }

  onClickCounter = () => {
    console.log("카운터 클릭");
    console.log(this.state.count);
    this.setState((prev: IState) => ({
      count: prev.count + 1,
    }));
  };

  onClickMove() {
    Router.push("/");
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <div>현재카운트: {this.state.count}</div>
        <button onClick={this.onClickCounter}>카운트 올리기 !!!</button>
        <button onClick={this.onClickMove}>나가기!!!</button>
      </div>
    );
  }
}
