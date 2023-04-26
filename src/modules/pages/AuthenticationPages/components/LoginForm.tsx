import React, {useCallback, useEffect, useState} from "react";
import {useNavigate} from "react-router";
import {SubmitHandler, useForm} from "react-hook-form";
import {IFormProps} from "../../../UIKit/Form/StyleComponent";
import {MForm} from "../../../UIKit/Form/MForm";
import {Title} from "../../../UIKit/Title/Title";
import {ViewLink} from "../../../UIKit/ViewLinks/ViewLink";
import {TextField} from "../../../UIKit/TextField/TextField";
import {PasswordTextField} from "../../../UIKit/PasswordTextField/PasswordTextField";
import {useSignInMutation} from "../../../../app/repository/realWorld/RealWorldApi";
import {FormButton} from "src/modules/UIKit/Button/Button";
import {useErrorResponse} from "../../../../hook/useErrorResponse";
import {ErrorMessages} from "../../../UIKit/ErrorMessage/ErrorMessage";


interface IFormValues {
    email: string,
    password: string,
};

export const LoginForm = (props: IFormProps) => {
    const navigate = useNavigate();
    const [signIn,
        {isError, error, data, isSuccess, isLoading}] = useSignInMutation();

    const {
        errorEmail,
        errorPassword,
        otherErrors
    } = useErrorResponse(error);

    const {
        register,
        setValue,
        setFocus,
        reset,
        handleSubmit,
        formState: {errors}
    } = useForm<IFormValues>();

    const onSubmit: SubmitHandler<IFormValues> = useCallback(async (data) => {
        await signIn(data)
    }, [signIn]);

    useEffect(() => {
        if (isSuccess) {
            reset();
            navigate('/')
        }
    }, [isSuccess])

    return (
        <MForm onSubmit={handleSubmit(onSubmit)} {...props}>
            <Title align='center' variant='h1'>Sign In</Title>
            <ViewLink to='/register'>Need an account?</ViewLink>
            <TextField
                register={register}
                type='email'
                name='email'
                placeholder='Email'
                errors={errors}
                validationRules={{
                    required: 'Required field',
                    pattern: {
                        value: /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
                        message: "Invalid email address"
                    }
                }}
            />
            {errorEmail && <ErrorMessages errors={errorEmail}/>}
            <PasswordTextField
                register={register}
                name='password'
                placeholder='Password'
                errors={errors}
                validationRules={{
                    required: 'Required field',
                    minLength: {
                        value: 8,
                        message: "Minimum eight characters"
                    },
                    pattern: {
                        value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                        message: "At least one uppercase letter, one lowercase letter and one number."
                    }
                }}
            />
            {errorPassword && <ErrorMessages errors={errorPassword}/>}
            {otherErrors && <ErrorMessages errors={otherErrors}/>}
            <FormButton disabled={isLoading}>Submit</FormButton>
        </MForm>

    );
};

