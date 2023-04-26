import React, {memo, useEffect, useMemo, useRef, useState} from 'react';
import {StyledFeedsContent, StyledFeedsNav} from 'src/modules/pages/homePage/components/FeedsItems/StyledComponent';
import {Container} from 'src/modules/UIKit/Container';
import {FeedsLink} from "../../../homePage/components/FeedsItems/components/FeedsLink";
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
