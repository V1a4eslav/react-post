import React, {FC, memo} from 'react';
import {AnimatePresence} from "framer-motion";
import {useGetTagsQuery} from "../../../../../app/repository/realWorld/RealWorldApi";
import {useAppSelector} from "../../../../../hook/redux";
import {StyledFeedsTagContent, StyledFeedsTags, StyledTagItems} from "./StyledFeedsTags";
import {Title} from "../../../../../UIKit/Title/Title";
import {TagItem} from "./TagItem";
import {useSearchParams} from "react-router-dom";
import {LoaderDots} from "../../../../../UIKit/Loader/Loader";

interface ITagList {
    tags: string[],
    tag: string
}

const TagList = memo(({tags, tag}: ITagList) => (
    <>
        {tags?.map((item, index) => (
            <TagItem to={`article?tag=${item}`}
                     disabled={tag === item}
                     layout
                     key={index}
                     initial={{opacity: 0, y: 20}}
                     animate={{opacity: 1, y: 0}}
                     transition={{delay: index * 0.1, duration: 0.5}}
                     exit={{opacity: 0, y: -20}}
            >
                {item}
            </TagItem>
        ))}
    </>
));

export const FeedsTags: FC = () => {
    const {isError, isSuccess,isLoading,isFetching} = useGetTagsQuery();
    const tags = useAppSelector(state => state.tags);
    const [searchParams] = useSearchParams();
    const tag = searchParams.get('tag') || '';

    return (
        <StyledFeedsTags>
            <AnimatePresence>
                <StyledFeedsTagContent initial={{opacity: 0, scale: 0.5}}
                                       animate={{opacity: 1, scale: 1}}
                                       transition={{duration: 0.5}}>
                    <Title variant='h5' size='16px' weight='500'>Popular Tags</Title>
                    {isError && <p style={{color: 'red'}}>Something happened with tags... (</p>}
                    {(isLoading || isFetching) && <LoaderDots/>}
                    {isSuccess && <StyledTagItems>
                        <TagList tag={tag} tags={tags}/>
                    </StyledTagItems>}
                </StyledFeedsTagContent>
            </AnimatePresence>
        </StyledFeedsTags>
    );
}