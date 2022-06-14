import { Block } from "./Components";
import "../styles/GlobalStyles";
import { useState } from "react";

export const HelloWorld = () => {
  const [text, setText] = useState("Hej");

  const handleClick = () => {
    setText("Trevligt");
  };
  return (
    <>
      <Block></Block>
      <button onClick={handleClick}>Ändra</button>
      <p>{text}</p>
    </>
  );
};
