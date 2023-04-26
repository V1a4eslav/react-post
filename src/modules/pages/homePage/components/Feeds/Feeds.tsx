import React from 'react';
import {FeedsBody} from "./components/FeedsBody";
import {FeedsTags} from "../FeedsTags/FeedsTags";
import {FeedsItems} from "../FeedsItems/FeedsItems";
import { Container } from 'src/modules/UIKit/Container';

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
