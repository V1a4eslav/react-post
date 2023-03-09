import {UseFormSetFocus, UseFormSetValue} from "react-hook-form/dist/types/form";

export const checkErrorMessage = (value: string, setValue: UseFormSetValue<any>, setFocus: UseFormSetFocus<any>) => {
    switch (value) {
        case 'EMAIL_EXISTS':
            setValue('email', '');
            setFocus('email');
            break;
        case 'EMAIL_NOT_FOUND':
            setValue('email', '');
            setFocus('email');
            break;
        case 'INVALID_PASSWORD':
            setValue('password', '');
            setFocus('password');
            break;
    }
}
