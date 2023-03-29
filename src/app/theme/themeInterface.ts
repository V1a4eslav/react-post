export interface Colors {
    primary: string;
    secondary: string;
    text: string;
    secondaryText: string;
    translucentPrimary: string;
    translucentSecondary: string;
    errorColor: string;
}

export interface Sizes {
    sizeThink: string;
    sizeExtraLight: string;
    sizeLight: string;
    sizeSemiLight: string;
    sizeNormal: string;
    sizeMedium: string;
    sizeBold: string;
}

export interface MediaQueries {
    phone: string;
    tablet: string;
    laptop: string;
}

export interface Theme {
    colors: Colors;
    size: Sizes;
    media: MediaQueries;
}

export interface ITheme {
    theme:Theme
}