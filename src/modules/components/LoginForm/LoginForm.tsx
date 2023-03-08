import React from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {IFormProps} from "../../../UIKit/Form/StyleComponent";
import {MForm} from "../../../UIKit/Form/MForm";
import {Title} from "../../../UIKit/Title/Title";
import {ViewLink} from "../../../UIKit/ViewLinks/ViewLink";
import {TextField} from "../../../UIKit/TextField/TextField";
import {FormButton} from "../../../UIKit/Button/Button";
import {PasswordTextField} from "../../../UIKit/PasswordTextField/PasswordTextField";
import {useFetch} from "../../../hook/useFetch";
import {StyledErrorMessage} from "../../../UIKit/TextField/components/StyledErrorMessage";


interface IFormValues {
    email: string,
    password: string,
};

export const LoginForm = (props: IFormProps) => {
    const {isLoading, error, doFetch} = useFetch('/auth/login');

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<IFormValues>();

    const onSubmit: SubmitHandler<IFormValues> = (data) => {
        doFetch({
            method: 'post',
            data
        })
    }

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
            {error && <StyledErrorMessage>{error.message}</StyledErrorMessage>}
            <FormButton disabled={isLoading}>Submit</FormButton>
        </MForm>

    );
};
