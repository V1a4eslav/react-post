import React, {useCallback, useEffect, useState} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {IFormProps} from "../../../UIKit/Form/StyleComponent";
import {Form} from "../../../UIKit/Form/Form";
import {Title} from "../../../UIKit/Title/Title";
import {ViewLink} from "../../../UIKit/ViewLinks/ViewLink";
import {FormButton} from "../../../UIKit/Button/Button";
import {TextField} from "../../../UIKit/TextField/TextField";
import {PasswordTextField} from "../../../UIKit/PasswordTextField/PasswordTextField";
import {useSignUpMutation} from "../../../app/repository/firebaseAuth/firebaseAuth";
import {IErrorResponse} from "../../../app/repository/firebaseAuth/models/IErrorResponse";
import {StyledErrorMessage} from "../../../UIKit/TextField/components/StyledErrorMessage";
import {useNavigate} from "react-router";


export interface IFormValues {
    name: string,
    email: string,
    password: string,
    confirmPassword: string,
};


export const RegisterForm = (props: IFormProps) => {
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState('');
    const [signUp, {isError, error, isSuccess}] = useSignUpMutation();

    const {
        register,
        setValue,
        setFocus,
        handleSubmit,
        formState: {errors},
        watch,
        reset
    } = useForm<IFormValues>()


    const onSubmit: SubmitHandler<IFormValues> = useCallback(async (data) => {
        const {email, password} = data;

        const response = await signUp({email, password});
        localStorage.setItem('tokens',JSON.stringify(response));

    }, [signUp])

    useEffect(() => {
        if (error) {
            setErrorMessage((error as IErrorResponse)?.data?.error?.message);
            if (errorMessage=== 'EMAIL_EXISTS') {
                setValue('email', '');
                setFocus('email');
            }
        }
    }, [error,errorMessage]);

    useEffect(() => {
        if (isSuccess) {
            reset();
            navigate('/login');
        }
    }, [isSuccess])

    return (
        <Form onSubmit={handleSubmit(onSubmit)} {...props}>
            <Title align='center' variant='h1'>Sign up</Title>
            <ViewLink to='/login'>Have an account?</ViewLink>
            <TextField
                register={register}
                placeholder='Name'
                name='name'
                errors={errors}
                validationRules={{
                    required: 'Required field',
                }}
            />
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
            <PasswordTextField
                register={register}
                name='confirmPassword'
                placeholder='Confirm Password'
                errors={errors}
                validationRules={{
                    required: 'Required field',
                    validate: (value) => value === watch('password') || 'Passwords do not match'
                }}
            />
            {isError && <StyledErrorMessage>{errorMessage}</StyledErrorMessage>}
            <FormButton>Submit</FormButton>
        </Form>
    );
};
