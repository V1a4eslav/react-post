import  {useState} from 'react';
import {themes} from "../app/theme";

export const useTheme = () => {
    const [theme, setTheme] = useState(themes.main);

    return {theme, setTheme};
};
