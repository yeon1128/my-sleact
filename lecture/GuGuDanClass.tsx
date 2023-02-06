import * as React from "react";
import { Component } from "react";

interface State {
  first: number;
  second: number;
  value: string;
  result: string;
}

class GuGuDanClass extends Component<{}, State> {
  // props, state, context
  state = {
    first: Math.ceil(Math.random() * 9),
    second: Math.ceil(Math.random() * 9),
    value: "",
    result: "",
  };

  onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (parseInt(this.state.value) === this.state.first * this.state.second) {
      this.setState((prev) => {
        return {
          result: "정답 " + prev.value,
          first: Math.ceil(Math.random() * 9),
          second: Math.ceil(Math.random() * 9),
        };
      });
      this.input && this.input.focus();
    } else {
      this.setState({
        result: "땡",
        value: "",
      });
      this.input && this.input.focus();
    }
  };

  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: e.target.value });
  };

  input: HTMLInputElement | null = null;

  onRefInput = (c: HTMLInputElement) => {
    this.input = c;
  };

  render() {
    return (
      <>
        <div>
          {this.state.first} 곱하기 {this.state.second}는?
        </div>
        <form onSubmit={this.onSubmit}>
          <input
            type="number"
            ref={this.onRefInput}
            value={this.state.value}
            onChange={(e) => this.onChange}
          />
          <button>입력</button>
        </form>
        <div>{this.state.result}</div>
      </>
    );
  }
}

export default GuGuDanClass;
