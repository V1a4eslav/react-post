import React, {useCallback, useEffect} from 'react';
import {Container} from 'src/UIKit/Container';
import {
    SArticleCommentFooter, SArticleCommentForm,
    SArticleUserCommentsBlock
} from "./StyledComponent";
import {SFeedUserLogo} from "../../../../components/Feeds/components/FeedsItems/components/StyledComponent";
import {IArticleProps} from "../ArticleHeader/ArticleHeader";
import {SArticleFormButton} from "../../../../../UIKit/Button/Button";
import {ArticleCommentsBody} from "./ArticleCommentsBody";
import {SubmitHandler, useForm} from "react-hook-form";
import {usePostCommentMutation} from "../../../../../app/repository/realWorld/RealWorldApi";
import {ArticleCommentTextarea} from "./ArticleCommentTextarea";

interface ISubmitComment {
    body: string,
}

export const ArticleFooter = ({data, isFetching, isLoading, isSuccess}: IArticleProps) => {
    const {article} = data;
    const [postComment, {isLoading: isCommentLoading,isSuccess:isCommentSuccess}] = usePostCommentMutation();

    const {
        register,
        handleSubmit,
        reset,
    } = useForm<ISubmitComment>();

    const onSubmit: SubmitHandler<ISubmitComment> = useCallback(async (comment) => {
        await postComment({query:article.slug, comment:{body:comment.body}});
    }, [postComment]);

    useEffect(() => {
        if (isCommentSuccess) {
            reset();
        }
    }, [isCommentSuccess])

    return (
        <>
            <SArticleUserCommentsBlock>
                <Container>
                    <SArticleCommentForm onSubmit={handleSubmit(onSubmit)}>
                        <ArticleCommentTextarea
                            register={register}
                            name='body'
                            placeholder='Write a comments...'
                            validationRules={{
                                required: 'Required field',
                            }}/>
                        <SArticleCommentFooter>
                            <SFeedUserLogo to={`/profiles/${article.author.username}`}>
                                <img src={article.author.image} alt="user_logo"/>
                            </SFeedUserLogo>
                            <SArticleFormButton disabled={isLoading}>Post Comment</SArticleFormButton>
                        </SArticleCommentFooter>
                    </SArticleCommentForm>
                    <ArticleCommentsBody/>
                </Container>
            </SArticleUserCommentsBlock>
        </>
    );
};