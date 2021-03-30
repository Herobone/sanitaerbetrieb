import React from "react";
import ReactDOM from "react-dom";
import { MuiThemeProvider } from "@material-ui/core";
import { App } from "./App";
import "./assets/sass/main.module.scss";
import { defaultTheme } from "./Theme";

ReactDOM.render(
    <React.StrictMode>
        <MuiThemeProvider theme={defaultTheme}>
            <App />
        </MuiThemeProvider>
    </React.StrictMode>,
    document.querySelector("#root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
