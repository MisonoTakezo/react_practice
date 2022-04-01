import { useEffect } from "react";

const useBgLigntBlue = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";
    console.log("mounted");
    return () => {
      document.body.style.backgroundColor = "";
      console.log("unmounted");
    };
  }, []);
};

export { useBgLigntBlue };
