import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ITagsResponse} from "./models/ITagsResponse";
import {RealWorldApi} from "./RealWorldApi";

const initialState:string[] = []

const tagSlice = createSlice({
    name: 'tags',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(RealWorldApi.endpoints.getTags.matchFulfilled, (_state, action:PayloadAction<ITagsResponse>) => {
           return action.payload.tags;
        });
    }
});

export const tagReducer = tagSlice.reducer;
export const tagActions = tagSlice.actions;