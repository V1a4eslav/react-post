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
import {userReducer} from "./user/userSlice";


const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['Authentication'],
    whitelist: ['user']
}

const rootReducer = combineReducers({
    [firebaseApi.reducerPath]: firebaseApi.reducer,
    user: userReducer
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

export type RootState = ReturnType<typeof store.getState>