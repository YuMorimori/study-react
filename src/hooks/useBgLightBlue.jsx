import React, { useEffect } from "react";

export const useBgLightBlue = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";

    // アンマウント時の処理はreturnを使う
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);
};
