import React, {StrictMode} from 'react';
import {App} from './app/App';
import ReactDOM from "react-dom/client";
import './firebase';
import {Provider} from "react-redux";
import {persistor, store} from "./app/repository/store";
import {PersistGate} from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <StrictMode>
                <App/>
            </StrictMode>
        </PersistGate>
    </Provider>
);
