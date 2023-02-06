// import * as React, {useState} from "react"; // ❌ 한 방에 못씀
import * as React from "react";
import { useState, useRef } from "react";

// <> === React.Fragment
const GuGuDan = () => {
  // const [first, setFirst] = React.useState(Math.ceil(Math.random() * 9));
  const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState("");
  const [result, setResult] = useState("정답은 몰까용");
  const inputEl = useRef<HTMLInputElement>(null);

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = inputEl.current;

    if (parseInt(value) === first * second) {
      // 정답을 맞춘 경우
      setResult("정답");
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setValue("");
      input && input.focus(); // if문을 쓰면 100% 안전 왠만하면 if로 감싸기
      // input!.focus() // 아주 작은 에러라도 발생할 가능성 존재
    } else {
      // 정답을 틀린 경우
      setResult("땡");
      setValue("");
      input && input.focus(); // if문을 쓰면 100% 안전
      // input!.focus() // 아주 작은 에러라도 발생할 가능성 존재
    }
  };

  return (
    <>
      <div>
        {first} 곱하기 {second}는?
      </div>
      <form onSubmit={onSubmitForm}>
        <input
          type="number"
          ref={inputEl}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
      <div>{result}</div>
    </>
  );
};

export default GuGuDan;
