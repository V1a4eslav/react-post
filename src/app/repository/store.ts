import {configureStore, combineReducers} from "@reduxjs/toolkit";
import {firebaseApi} from "./firebaseAuth/firebaseAuth";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const persistConfig = {
    key: "root",
    version: 1,
    storage,
    blacklist:  [firebaseApi.reducerPath]
}

const rootReducer = combineReducers({
    [firebaseApi.reducerPath]: firebaseApi.reducer,
})


const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(firebaseApi.middleware),
    })

export const persistor = persistStore(store);