import React, {useRef} from 'react';
import {StyledFeedsContent, StyledFeedsNav} from 'src/modules/components/Feeds/components/FeedsItems/StyledComponent';
import {Container} from 'src/UIKit/Container';
import {FeedsLink} from "../../../../components/Feeds/components/FeedsItems/FeedsLink";
import {Outlet} from "react-router";
import {IProfileResponse} from "../../../../../app/repository/realWorld/models/IProfileResponse";

export const PostsLayout = ({userData}: { userData: IProfileResponse }) => {
    const {profile} = userData;
    const postsContentRef = useRef(null);

    return (
        <Container>
            <StyledFeedsNav>
                <FeedsLink to={`/profile/${profile.username}`}>My Post</FeedsLink>
                <FeedsLink to={`/profile/${profile.username}/favorites`}>Favorites Post</FeedsLink>
            </StyledFeedsNav>
            <StyledFeedsContent ref={postsContentRef}>
                <Outlet context={postsContentRef}/>
            </StyledFeedsContent>
        </Container>
    );
};
