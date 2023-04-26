import {FetchBaseQueryError} from "@reduxjs/toolkit/query";
import {SerializedError} from "@reduxjs/toolkit";
import {useEffect, useState} from "react";

export interface IError {
    errors: Errors
}

export interface Errors {
    email?: string[],
    username?: string[],
    password?: string[],
    [key: string]: string[] | undefined;
}


export const useErrorResponse = (error: FetchBaseQueryError | SerializedError | undefined) => {
    const [errorEmail, setErrorEmail] = useState<string[]|undefined>(undefined);
    const [errorUsername, setErrorUsername] = useState<string[]|undefined>(undefined);
    const [errorPassword, setErrorPassword] = useState<string[]|undefined>(undefined);
    const [otherErrors, setOtherErrors] = useState<string[]|undefined>(undefined);

    useEffect(() => {
        if (error && 'data' in error) {
            const {errors} = error.data as IError;
            const keys = Object.keys(errors);
            keys.forEach((key) => {
                switch (key) {
                    case 'email':
                        setErrorEmail(errors.email as string[])
                        break;
                    case 'username':
                        setErrorUsername(errors.username as string[])
                        break;
                    case 'password':
                        setErrorPassword(errors.password as string[])
                        break;
                    default:
                        setOtherErrors(prevErrors=> [`${key}: ${errors[key]}`])
                }
            });
        } else {
            setErrorEmail(undefined);
            setErrorUsername(undefined);
            setErrorPassword(undefined);
            setOtherErrors(undefined);
        }
    }, [error]);

    return {
        errorEmail,
        errorUsername,
        errorPassword,
        otherErrors
    }
}