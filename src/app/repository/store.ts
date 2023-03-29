import {configureStore, combineReducers} from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, createTransform,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {RealWorldApi} from "./realWorld/RealWorldApi";
import {tagReducer} from "./realWorld/tagsSlice";
import {userReducer} from "./realWorld/user/userSlice";


const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['RealWorld'],
    whitelist: ['user','tags'],
    // transforms: [
    //     createTransform(
    //         (state: string[]) => state, //функция сериализации
    //         (state: any) => ({...state, realWorld: state.realWorld || []}), //функция десериализации
    //     ),
    // ],
}

const rootReducer = combineReducers({
    [RealWorldApi.reducerPath]:RealWorldApi.reducer,
    user:userReducer,
    tags:tagReducer,
})


const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(RealWorldApi.middleware),
})

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>