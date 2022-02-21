import { useRouter } from "next/router";
import React, { useEffect, useMemo } from "react";

export const useBgColor = () => {
  const router = useRouter();

  const bgColor = useMemo(() => {
    switch (router.pathname) {
      case "/": {
        return "lightblue";
      }
      case "/about": {
        return "beige";
      }
      default: {
        return "";
      }
    }
    // return router.pathname === "/" ? "lightblue" : "beige";
  }, [router.pathname]);

  useEffect(() => {
    document.body.style.backgroundColor = bgColor;

    // アンマウント時の処理はreturnを使う
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [bgColor]);
};
