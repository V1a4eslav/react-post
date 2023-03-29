import {useDispatch} from "react-redux";
import {bindActionCreators} from "@reduxjs/toolkit";
import {tagActions} from "../app/repository/realWorld/tagsSlice";
import {yourFeedsActions} from "../app/repository/realWorld/yourFeedsSlice";
import {globalFeedsActions} from "../app/repository/realWorld/feedsGlobalSlice";
import {userActions} from "../app/repository/realWorld/user/userSlice";

const actions = {
    ...userActions,
    ...tagActions,
    ...yourFeedsActions,
    ...globalFeedsActions,
}

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(actions, dispatch);
}