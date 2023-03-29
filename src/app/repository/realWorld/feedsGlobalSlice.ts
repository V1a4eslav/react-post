import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IFeedResponse} from "./models/IFeedResponse";
import {RealWorldApi} from "./RealWorldApi";

const initialState:IFeedResponse = {
        articles: [],
        articlesCount: 0
}

const feedsGlobalSlice = createSlice({
   name:'globalFeeds',
   initialState,
    reducers:{},
    extraReducers:(builder)=>{
       builder.addMatcher(RealWorldApi.endpoints.getGlobalFeeds.matchFulfilled,(_state, action:PayloadAction<IFeedResponse>)=>{
          return action.payload;
       });
    }
});

export const globalFeedsReducer = feedsGlobalSlice.reducer;
export const globalFeedsActions = feedsGlobalSlice.actions;
