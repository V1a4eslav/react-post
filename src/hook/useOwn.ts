import {useEffect, useMemo, useState} from "react";
import {useAppSelector} from "./redux";

export const useOwn = (username:string) => {
    const user = useAppSelector(state => state.user.userData.username);
    const isOwnArticle = useMemo(() => user === username, [user, username]);

    return {isOwnArticle}
}