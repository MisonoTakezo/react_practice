import { useState, useCallback } from "react";

const useInputArray = () => {
  const [text, setText] = useState("");
  const [textArr, setTextArr] = useState([]);

  const handleInput = useCallback((e) => {
    if (e.target.value.length > 5) {
      alert("5文字以内にしてください");
      return;
    }
    setText(e.target.value);
  }, []);

  const handleSubmit = useCallback(() => {
    if (text == "") {
      return;
    }
    setTextArr((prevArr) => [...prevArr, text]);
    setText("");
  }, [text]);

  return { text, textArr, handleInput, handleSubmit };
};

export { useInputArray };
