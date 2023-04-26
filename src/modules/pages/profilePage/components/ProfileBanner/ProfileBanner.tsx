import React from 'react';
import {Container} from 'src/modules/UIKit/Container';
import {
    SProfileBannerEditButton,
    SProfileBannerInner,
    SProfileBannerLogo,
    SProfileBannerWrapper
} from "./StyledComponent";
import {Title} from "../../../../UIKit/Title/Title";
import {RiSettings5Fill} from "@react-icons/all-files/ri/RiSettings5Fill";
import {IProfileResponse} from "../../../../../app/repository/realWorld/models/IProfileResponse";
import {useOwn} from "../../../../../hook/useOwn";
import {SArticleUserFollowButton} from "../../../../UIKit/ArticleUserButton/StyledComponent";
import {BiPlusMedical} from "react-icons/bi";
import {useFollow} from "../../../../../hook/useFollow";

export const ProfileBanner = ({userData}: { userData: IProfileResponse }) => {
    const {profile} = userData;
    const {isOwnArticle} = useOwn(profile.username);

    const {
        handleFollow,
        isFollow,
        isLoadingPostFollow,
        isLoadingDeleteFollow
    } = useFollow(profile);

    return (
        <SProfileBannerWrapper>
            <Container>
                <SProfileBannerInner>
                    <SProfileBannerLogo src={profile.image}/>
                    <Title variant='h4'
                           weight='700'
                           align='center'>{profile.username}
                    </Title>
                    {isOwnArticle && <SProfileBannerEditButton to='/settings'>
                        <RiSettings5Fill/>
                        <span>Edit Profile Settings</span>
                    </SProfileBannerEditButton>}
                    {!isOwnArticle && <SArticleUserFollowButton className={isFollow ? 'active' : ''}
                                                onClick={handleFollow}
                                                disabled={!!(isLoadingDeleteFollow||isLoadingPostFollow)}>
                        <BiPlusMedical/>
                        <span>
                            {!isFollow ? 'Follow' : 'Unfollow'} {profile.username}
                        </span>
                    </SArticleUserFollowButton>}
                </SProfileBannerInner>
            </Container>
        </SProfileBannerWrapper>
    );
};
