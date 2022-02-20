import React, { useCallback, useState } from "react";

export const useCounter = () => {
  const [count, setCount] = useState(1);
  const [isShow, setIsShow] = useState(true);

  const handleClick = useCallback(
    () => {
      if (count < 10) {
        setCount((prevCount) => prevCount + 1);
      }
      // 前の状態を用いて更新したい時はsetの引数に関数を書く
    },
    [count]
    // 第二引数を指定すると値が変更されるたびメソッド部分が再生成される
    // 再生成を限定することでアプリのパフォーマンスをアップさせる目的
  );

  const handleDisplay = useCallback(() => {
    setIsShow((prevIsShow) => !prevIsShow);
    // return isShow ? false : true;
  }, []);
  return { count, isShow, handleClick, handleDisplay };
};