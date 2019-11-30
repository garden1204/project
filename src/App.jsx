import React from "react";
import Pan from "./pages/Pan";
import {createGlobalStyle} from "styled-components";


const GlobalStyle = createGlobalStyle`
  * {
    margin:0;
    padding:0;
  }

  body{
    background-color:black;
  }
`;

function App() {
  return (
    <>
     <GlobalStyle />
     <Pan/>
    </>
  );
}
export default App;