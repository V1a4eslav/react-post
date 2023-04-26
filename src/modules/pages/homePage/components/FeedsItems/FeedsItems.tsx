import React, {FC, MutableRefObject, useRef} from 'react';
import {Outlet, useLocation} from "react-router";
import {StyledFeedsContent, StyledFeedsNav, StyledFeedsWrapper} from "./StyledComponent";
import {FeedsLink} from "./components/FeedsLink";
import {useSearchParams} from 'react-router-dom';

export const FeedsItems: FC = () => {
    const {pathname} = useLocation();
    const [searchParams] = useSearchParams();
    const tag = searchParams.get('tag');
    const feedsContentRef = useRef(null);

    return (
        <StyledFeedsWrapper>
            <StyledFeedsNav>
                <FeedsLink to='your-feed'>Your Feed</FeedsLink>
                <FeedsLink to={!(pathname === '/main') ? 'global-feed' : '/main'}>Global Feed</FeedsLink>
                {tag && <FeedsLink to={`article?tag=${tag}`}>#{tag}</FeedsLink>}
            </StyledFeedsNav>
            <StyledFeedsContent ref={feedsContentRef}>
                <Outlet context={feedsContentRef}/>
            </StyledFeedsContent>
        </StyledFeedsWrapper>
    );
};
