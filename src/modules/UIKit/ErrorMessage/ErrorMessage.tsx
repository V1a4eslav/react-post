import React from 'react';
import {StyledErrorMessage} from "./StyledErrorMessage";


export const ErrorMessages = ({errors}: { errors: string[] | undefined }) => {
    return (
        <>
            {errors && errors.map(error => (
                <StyledErrorMessage key={error}>
                    {error}
                </StyledErrorMessage>)
            )
            }

        </>
    );
};
