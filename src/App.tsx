import React from "react";
import "./App.css";
import GlobalStyles from "./styles/GlobalStyles";
import { HelloWorld } from "./components/HelloWorld";

function App() {
  return (
    <>
      <GlobalStyles></GlobalStyles>
      <HelloWorld></HelloWorld>
    </>
  );
}

export default App;
