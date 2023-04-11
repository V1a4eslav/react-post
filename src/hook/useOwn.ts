import {useEffect, useState} from "react";
import {useAppSelector} from "./redux";

export const useOwn = (username:string) => {
    const [isOwnArticle, setIsOwnArticle] = useState(false);
    const user = useAppSelector(state => state.user.userData.username);

    useEffect(() => {
        setIsOwnArticle(user === username)
    }, [username]);

    return {isOwnArticle}
}