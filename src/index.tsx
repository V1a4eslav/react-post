import React from 'react';
import {App} from './app/App';
import ReactDOM from "react-dom/client";
import './firebase';
import {Provider} from "react-redux";
import {store} from "./app/repository/store";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);
