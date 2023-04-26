import React from 'react';
import {Feeds} from 'src/modules/pages/homePage/components/Feeds/Feeds';
import {Banner} from "./components/Banner/Banner";

export const HomePage = () => {
    return (
        <>
            <Banner/>
            <Feeds/>
        </>
    );
};

