import React, {useState} from 'react';
import {themes} from "../app/theme";
import {ICurrentTheme} from "../app/theme/themeInterface";

export const useTheme = () => {
    const [theme, setTheme] = useState<ICurrentTheme>(themes.main);

    return {theme, setTheme};
};
