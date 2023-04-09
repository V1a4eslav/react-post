import React from 'react';
import {SArticleCommentTextarea} from "./StyledComponent";
import {RegisterOptions, UseFormRegisterReturn} from "react-hook-form";


interface ArticleCommentTextarea {
    register(name: string, validationRules?: RegisterOptions): UseFormRegisterReturn;

    name: string;
    placeholder: string;
    validationRules?: RegisterOptions;
}

export const ArticleCommentTextarea = (props: ArticleCommentTextarea) => {
    const {
        register,
        name,
        placeholder,
        validationRules,
        ...rest
    } = props;

    return (
        <SArticleCommentTextarea  {...register(name, validationRules)} {...rest}/>
    );
};
