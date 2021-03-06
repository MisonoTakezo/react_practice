import { useEffect, useMemo } from "react";
import { useRouter } from "next/router";

const useBgColor = () => {
  const router = useRouter();
  const bgColor = useMemo(() => {
    switch (router.pathname) {
      case "/":
        return "lightblue";
      case "/about":
        return "beige";
      default:
        return "";
    }
  }, [router.pathname]);

  console.log(router);
  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [bgColor]);
};

export { useBgColor };
