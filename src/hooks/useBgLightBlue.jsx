import { useEffect } from "react";

const useBgLightBlue = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";
    console.log("mounted");
    return () => {
      document.body.style.backgroundColor = "";
      console.log("unmounted");
    };
  }, []);
};

export { useBgLightBlue };
