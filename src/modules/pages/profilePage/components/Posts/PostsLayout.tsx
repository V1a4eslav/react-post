import React, {memo, useEffect, useMemo, useRef, useState} from 'react';
import {StyledFeedsContent, StyledFeedsNav} from 'src/modules/components/Feeds/components/FeedsItems/StyledComponent';
import {Container} from 'src/UIKit/Container';
import {FeedsLink} from "../../../../components/Feeds/components/FeedsItems/FeedsLink";
import {Outlet} from "react-router";
import {IProfileResponse} from "../../../../../app/repository/realWorld/models/IProfileResponse";

export const PostsLayout = memo(({userData}: { userData: IProfileResponse }) => {
    const postsContentRef = useRef(null);
    const profile = useMemo(() => userData.profile, [userData.profile]);

    const userName = encodeURIComponent(profile.username);

    return (
        <Container>
            <StyledFeedsNav>
                <FeedsLink to={`/profile/${userName}`}>My Post</FeedsLink>
                <FeedsLink to={`/profile/${userName}/favorites`}>Favorites Post</FeedsLink>
            </StyledFeedsNav>
            <StyledFeedsContent ref={postsContentRef}>
                <Outlet context={postsContentRef}/>
            </StyledFeedsContent>
        </Container>
    );
});
