import {useDispatch} from "react-redux";
import {bindActionCreators} from "@reduxjs/toolkit";
import {tagActions} from "../app/repository/realWorld/tagsSlice";
import {userActions} from "../app/repository/realWorld/user/userSlice";

const actions = {
    ...userActions,
    ...tagActions,
}

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(actions, dispatch);
}