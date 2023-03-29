import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IFeedResponse} from "./models/IFeedResponse";
import {RealWorldApi} from "./RealWorldApi";

const initialState:IFeedResponse = {
        articles: [],
        articlesCount: 0
}

const yourFeedsSlice = createSlice({
   name:'yourFeeds',
   initialState,
    reducers:{},
    extraReducers:(builder)=>{
       builder.addMatcher(RealWorldApi.endpoints.getGlobalFeeds.matchFulfilled,(_state, action:PayloadAction<IFeedResponse>)=>{
          return action.payload;
       });
    }
});

export const yourFeedsReducer = yourFeedsSlice.reducer;
export const yourFeedsActions = yourFeedsSlice.actions;
