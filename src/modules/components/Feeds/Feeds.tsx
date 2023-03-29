import React, {useState} from 'react';
import {Container} from "@mui/material";
import {FeedsBody} from "./components/FeedsBody";
import {FeedsTags} from "./components/FeedsTags/FeedsTags";
import {FeedsItems} from "./components/FeedsItems/FeedsItems";

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
