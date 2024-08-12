import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


import {ThemeProvider} from "styled-components";
import {Theme} from "./components/styles/Theme.styled";
import {GlobalStyle} from "./components/styles/GlobalStyles";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

function GlobalStyles() {
    return null;
}

root.render(
    <ThemeProvider theme={Theme}>
        <App />
        <GlobalStyle></GlobalStyle>
    </ThemeProvider>


);

