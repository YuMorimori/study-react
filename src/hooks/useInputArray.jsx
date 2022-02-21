import React, { useCallback, useState } from "react";

export const useInputArray = () => {
  const [text, setText] = useState("");
  const [array, setArray] = useState([]);

  const handleChange = useCallback((e) => {
    if (e.target.value.length > 5) {
      alert("５文字以内にしてください");
      return;
    }
    setText(e.target.value.trim());
  }, []);

  const handleAdd = useCallback(() => {
    setArray((prevArray) => {
      if (prevArray.includes(text)) {
        alert("同じ要素がすでに存在します。");
        return prevArray;
      } //
      // const newArray = [...prevArray, text]; //破壊的メソッドを避けるためにスプレッド構文を使う
      return [...prevArray, text];
    });
  }, [text]);
  return { text, array, handleChange, handleAdd };
};