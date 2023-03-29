import {Transition} from "framer-motion";
import React from "react";
import {LoadingContainer, LoadingDot, LoadingWrapper} from "./StyledComponent";

const ContainerVariants = {
    initial: {
        transition: {
            staggerChildren: 0.2
        }
    },
    animate: {
        transition: {
            staggerChildren: 0.2
        }
    }
};

const DotVariants = {
    initial: {
        y: "0%"
    },
    animate: {
        y: "100%"
    }
};

const DotTransition: Transition = {
    duration: .5,
    repeat: Infinity,
    repeatType: "mirror",
    ease: "easeInOut"
};

export const LoaderDots = ()=> {
    return (
        <LoadingWrapper>
            <LoadingContainer
                variants={ContainerVariants}
                initial="initial"
                animate="animate"
            >
                <LoadingDot
                    variants={DotVariants}
                    transition={DotTransition}
                />
                <LoadingDot
                    variants={DotVariants}
                    transition={DotTransition}
                />
                <LoadingDot
                    variants={DotVariants}
                    transition={DotTransition}
                />
            </LoadingContainer>
        </LoadingWrapper>
    );
}
