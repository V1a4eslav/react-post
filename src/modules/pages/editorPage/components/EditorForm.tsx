import React, {useCallback, useEffect, useState} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {
    SArticleAboutField,
    SArticleForm,
    SArticleFormButton,
    SArticleTagsField,
    SArticleTitleField
} from './StyledComponents';
import {TextareaField} from "../../../UIKit/TextareaField/TextareaField";
import {useNewArticleMutation} from "../../../../app/repository/realWorld/RealWorldApi";
import {useNavigate} from "react-router";

interface IArticle{
    tagList:string,
    title:string,
    description:string,
    body:string
}


export const EditorForm = () => {
    const navigate = useNavigate();
    const [newArticle, {isLoading, data,isSuccess}] = useNewArticleMutation();

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm<IArticle>();

    const onSubmit: SubmitHandler<IArticle> = useCallback(async (data) => {
        const tagList = data.tagList.split(' ');
        await newArticle({ ...data, tagList } );
    }, [newArticle]);

    useEffect(() => {
        if (isSuccess && data) {
            reset();
            navigate(`/article/${data.article.slug}`)
        }
    }, [isSuccess,data])

    return (
        <SArticleForm onSubmit={handleSubmit(onSubmit)}>
            <SArticleTitleField register={register}
                                disabled={isLoading}
                                name='title'
                                placeholder='Article Title'
                                errors={errors}
                                validationRules={{
                                    required: 'Required field',
                                }}/>
            <SArticleAboutField register={register}
                                disabled={isLoading}
                                name='description'
                                errors={errors}
                                placeholder='Whats`s this article about?'
                                validationRules={{
                                    required: 'Required field',
                                }}/>
            <TextareaField placeholder='Write your article (in markdown)'
                           disabled={isLoading}
                           name='body'
                           errors={errors}
                           register={register}
                           validationRules={{
                               required: 'Required field',
                           }}/>
            <SArticleTagsField register={register}
                               disabled={isLoading}
                               name='tagList'
                               placeholder='Enter tags'
                               errors={errors}
            />
            <SArticleFormButton disabled={isLoading}> Publish Article</SArticleFormButton>
        </SArticleForm>
    );
};
