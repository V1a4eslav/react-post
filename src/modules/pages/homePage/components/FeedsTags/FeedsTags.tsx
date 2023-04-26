import React, {FC} from 'react';
import {AnimatePresence} from "framer-motion";
import {useGetTagsQuery} from "../../../../../app/repository/realWorld/RealWorldApi";
import {useAppSelector} from "../../../../../hook/redux";
import {StyledFeedsTagContent, StyledFeedsTags, StyledTagItems} from "./StyledFeedsTags";
import {Title} from "../../../../UIKit/Title/Title";
import {useSearchParams} from "react-router-dom";
import {LoaderDots} from "../../../../UIKit/Loader/Loader";
import {TagList} from "./TagList";
import {StyledErrorMessage} from "../../../../UIKit/ErrorMessage/StyledErrorMessage";

export const FeedsTags: FC = () => {
    const {isError, isSuccess, isLoading, isFetching} = useGetTagsQuery();
    const tags = useAppSelector(state => state.tags);
    const [searchParams] = useSearchParams();
    const tag = searchParams.get('tag') || '';

    return (
        <StyledFeedsTags>
            <AnimatePresence>
                <StyledFeedsTagContent initial={{opacity: 0, scale: 0.5}}
                                       animate={{opacity: 1, scale: 1}}
                                       transition={{duration: 0.5}}>
                    <Title variant='h5'
                           size='16px'
                           weight='500'>Popular Tags</Title>
                    {isLoading && <LoaderDots/>}
                    <StyledTagItems>
                        {isSuccess &&
                            <TagList tag={tag} tags={tags}/>}
                        {isError &&
                            <StyledErrorMessage>Something happened with tags...(</StyledErrorMessage>}
                    </StyledTagItems>
                </StyledFeedsTagContent>
            </AnimatePresence>
        </StyledFeedsTags>
    );
}