export interface Colors {
    primary: string;
    secondary: string;
    text: string;
    secondaryText: string;
    translucentPrimary: string;
    translucentSecondary: string;
}

export interface Size {
    sizeThink: string;
    sizeExtraLight: string;
    sizeLight: string;
    sizeSemiLight: string;
    sizeNormal: string;
    sizeMedium: string;
}

export interface Media {
    phone: string;
    tablet: string;
    laptop: string;
}

export interface ICurrentTheme {
    colors: Colors;
    size: Size;
    media: Media;
}

export interface Themes {
    main: ICurrentTheme;
}

export interface RootObject {
    themes: Themes;
}