import React, {useState} from 'react';
import styled from "styled-components";
import { Fade } from './Fade';

const StyledMain = styled.main`
  position: relative;
  flex: 1 1 auto;
  width: 100%;
  height: 100%;
`;

export const MainWrapper = ({ children, ...rest }:any) => {
    const [showTransition, setShowTransition] = useState(true);

    return (
        <StyledMain {...rest}>
            <Fade
                in={showTransition}
                timeout={1000}
                classNames="fade"
                onExited={() => setShowTransition(false)}
            >
                {children}
            </Fade>
        </StyledMain>
    );
};
