import React from 'react';
import {STextarea} from './StyledComponent';
import {FieldError, FieldErrors, RegisterOptions, UseFormRegisterReturn} from "react-hook-form";
import {FormGroup} from "../TextField/components/FormGroup/FormGroup";
import {StyledErrorMessage} from "../TextField/components/StyledErrorMessage";

interface ITextareaProps {
    placeholder: string,
    name: string,
    register(name: string, validationRules?: RegisterOptions): UseFormRegisterReturn,
    validationRules?: RegisterOptions,
    errors: FieldErrors<any>;
    disabled?:boolean;
}

export const TextareaField = (props: ITextareaProps) => {
    const {
        disabled,
        register,
        name,
        validationRules,
        errors,
        ...rest
    } = props;

    return (
        <FormGroup>
            <STextarea
                disabled={disabled}
                errors={!!errors[name]}
                {...register(name,validationRules)}
                {...rest}
            />
            {errors[name] && (
                <StyledErrorMessage>{(errors[name] as FieldError).message}</StyledErrorMessage>
            )}
        </FormGroup>

    );
};
