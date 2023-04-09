import React, {useCallback, useEffect} from 'react';
import {useGetArticleQuery, useUpdateArticleMutation} from "../../../../app/repository/realWorld/RealWorldApi";
import {SubmitHandler, useForm} from "react-hook-form";
import {
    SArticleAboutField,
    SArticleForm,
    SArticleFormButton,
    SArticleTagsField,
    SArticleTitleField
} from "./StyledComponents";
import {TextareaField} from "../../../../UIKit/TextareaField/TextareaField";
import {useNavigate} from "react-router";

interface IArticle {
    tagList: string,
    title: string,
    description: string,
    body: string
}

export const EditorUpdateForm = ({slug}: { slug: string }) => {
    const navigate = useNavigate();
    const {data, isLoading, isSuccess} = useGetArticleQuery(slug);
    const [updateArticle, {
        data: updateData,
        isSuccess: isSuccessUpdate,
        isLoading: isLoadingUpdate
    }] = useUpdateArticleMutation();

    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: {errors}
    } = useForm<IArticle>();

    const onSubmit: SubmitHandler<IArticle> = useCallback(async (data) => {
        const tagList = data.tagList.split(' ');
        await updateArticle({query: slug, body: {...data, tagList}});
    }, [updateArticle]);

    useEffect(() => {
        if (data) {
            setValue('title', data.article.title);
            setValue('description', data.article.description);
            setValue('body', data.article.body);
            setValue('tagList', data.article.tagList.join(' '));
        }
    }, [data, setValue]);

    useEffect(() => {
        if (isSuccessUpdate && updateData) {
            console.log(updateData)
            reset();
            navigate(`/article/${updateData.article.slug}`)
        }
    }, [isSuccessUpdate, updateData])

    return (
        <SArticleForm onSubmit={handleSubmit(onSubmit)}>
            <SArticleTitleField register={register}
                                disabled={isLoadingUpdate}
                                name='title'
                                placeholder='Article Title'
                                errors={errors}
                                validationRules={{
                                    required: 'Required field',
                                }}/>
            <SArticleAboutField register={register}
                                disabled={isLoadingUpdate}
                                name='description'
                                errors={errors}
                                placeholder='Whats`s this article about?'
                                validationRules={{
                                    required: 'Required field',
                                }}/>
            <TextareaField placeholder='Write your article (in markdown)'
                           disabled={isLoadingUpdate}
                           name='body'
                           errors={errors}
                           register={register}
                           validationRules={{
                               required: 'Required field',
                           }}/>
            <SArticleTagsField register={register}
                               disabled={isLoadingUpdate}
                               name='tagList'
                               placeholder='Enter tags'
                               errors={errors}
            />
            <SArticleFormButton disabled={isLoading}> Publish Article</SArticleFormButton>
        </SArticleForm>
    );
};
