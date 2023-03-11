import {RootState} from "../app/repository/store";
import {TypedUseSelectorHook, useSelector} from 'react-redux';

export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector;