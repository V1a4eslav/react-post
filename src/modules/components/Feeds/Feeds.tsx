import React from 'react';
import {FeedsBody} from "./components/FeedsBody";
import {FeedsTags} from "./components/FeedsTags/FeedsTags";
import {FeedsItems} from "./components/FeedsItems/FeedsItems";
import { Container } from 'src/UIKit/Container';

export const Feeds = () => {
    return (
        <Container>
            <FeedsBody>
                <FeedsItems/>
                <FeedsTags />
            </FeedsBody>
        </Container>
    );
};
