/* eslint-disable */

{/* library */}
import React from 'react'
import { createGlobalStyle } from "styled-components";

{/* components */}
import Game from './components/Game'

const GlobalStyle = createGlobalStyle`
* {
  margin:0;
  padding: 0;
  box-sizing:border-box;    
}
`;

function App() {
  return (
    <div className="App">
    main page

    <GlobalStyle></GlobalStyle>
    <Game></Game>
      
    </div>
  );
}

export default App;
