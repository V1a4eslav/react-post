import React from 'react';
import {BannerWrapper} from "./components/BannerWrapper";
import {BannerTitle} from "./components/BannerTitle";
import {BannerText} from "./components/BannerText";
import { Container } from 'src/modules/UIKit/Container';

export const Banner = () => {
    return (
        <BannerWrapper>
            <Container>
                <BannerTitle variant='h1'
                             size='56px'
                             align='center'
                             color='#fff'
                             weight='700'>conduit
                </BannerTitle>
                <BannerText>A place to share your Angular knowledge.</BannerText>
            </Container>
        </BannerWrapper>
    );
};
