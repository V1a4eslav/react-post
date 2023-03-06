import {configureStore} from "@reduxjs/toolkit";
import {firebaseApi} from "./firebaseAuth/firebaseAuth";

export const store = configureStore({
    reducer: {
        [firebaseApi.reducerPath]: firebaseApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(firebaseApi.middleware),
})