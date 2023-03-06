import React, {useState} from 'react';
import {ITextFieldProps} from "../TextField/StyleComponent";
import {StyledInput} from "../TextField/components/Input/StyledInput";
import {StyledLabel} from "../TextField/components/Label/StyledLabel";
import { StyledErrorMessage} from "../TextField/components/StyledErrorMessage";
import {FieldError} from "react-hook-form";
import {FormGroup} from "../TextField/components/FormGroup/FormGroup";
import {StyledButtonPassword} from './components/ButtonPassword';
import {Eye, EyeInvisible} from "./components/StyledIcons";


export const PasswordTextField = (props: ITextFieldProps) => {
    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        name,
        placeholder,
        validationRules,
        classNameLabel,
        errors
    } = props;

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <FormGroup>
            <StyledInput
                type={showPassword ? 'text' : 'password'}
                placeholder={placeholder}
                errors={!!errors[name]}
                {...register(name, validationRules)}
            />
            <StyledLabel className={classNameLabel ? classNameLabel : ''}>
                {placeholder}
            </StyledLabel>
            <StyledButtonPassword type='button' onClick={toggleShowPassword}>
                {showPassword ? <Eye/> : <EyeInvisible/>}
            </StyledButtonPassword>
            {errors[name] && (
                <StyledErrorMessage>{(errors[name] as FieldError).message}</StyledErrorMessage>
            )}
        </FormGroup>
    )
};
