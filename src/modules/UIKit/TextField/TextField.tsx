import React from 'react';
import {FormGroup} from "./components/FormGroup/FormGroup";
import {ITextFieldProps} from './StyleComponent';
import {StyledInput} from "./components/Input/StyledInput";
import {FieldError} from "react-hook-form";
import {StyledErrorMessage} from "../ErrorMessage/StyledErrorMessage";
import {StyledLabel} from './components/Label/StyledLabel';


export const TextField = (props: ITextFieldProps) => {
    const {
        register,
        disabled,
        name,
        placeholder,
        validationRules,
        classNameLabel,
        errors,
        ...rest
    } = props;

    return (
        <>
            <FormGroup>
                <StyledInput
                    disabled={disabled}
                    placeholder={placeholder}
                    errors={!!errors[name]}
                    {...register(name, validationRules)}
                    {...rest}/>
                <StyledLabel className={classNameLabel ? classNameLabel : ''}>
                    {placeholder}
                </StyledLabel>
            </FormGroup>
            {errors[name] && (
                <StyledErrorMessage>{(errors[name] as FieldError).message}</StyledErrorMessage>
            )}
        </>
    );
};
