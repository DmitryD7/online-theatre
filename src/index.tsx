import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './features/App/App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {store} from "./application/store";
import {createMuiTheme, ThemeProvider} from "@material-ui/core";
import {BrowserRouter} from "react-router-dom";

//For MaterialUI colors
const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#fff"
        },
        secondary: {
            main: "#ffcc80"
        }
    },
});

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
        <ThemeProvider theme={theme}>
            <App/>
        </ThemeProvider>
    </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
