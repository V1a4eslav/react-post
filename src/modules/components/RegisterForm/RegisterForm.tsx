import React, {useCallback, useEffect, useState} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {IFormProps} from "../../../UIKit/Form/StyleComponent";
import {MForm} from "../../../UIKit/Form/MForm";
import {Title} from "../../../UIKit/Title/Title";
import {ViewLink} from "../../../UIKit/ViewLinks/ViewLink";
import {FormButton} from "../../../UIKit/Button/Button";
import {TextField} from "../../../UIKit/TextField/TextField";
import {PasswordTextField} from "../../../UIKit/PasswordTextField/PasswordTextField";
import {useSignUpMutation} from "../../../app/repository/firebaseAuth/firebaseAuth";
import {IErrorResponse} from "../../../app/repository/firebaseAuth/models/IErrorResponse";
import {StyledErrorMessage} from "../../../UIKit/TextField/components/StyledErrorMessage";
import {useNavigate} from "react-router";
import {ModalSuccess} from "../../../UIKit/Modals/Modal/ModalSuccess";
import {Modal} from "../../../UIKit/Modals/Modal/Modal";
import {checkErrorMessage} from "../../../helpers/checkErrorMessage";


interface IFormValues {
    name: string,
    email: string,
    password: string,
    confirmPassword: string,
};


export const RegisterForm = (props: IFormProps) => {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');
    const [signUp, {isError, error, data, isSuccess, isLoading}] = useSignUpMutation();
    const [isOpenModal, setIsOpenModal] = useState(false);

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
        await signUp({email, password});

    }, [signUp]);

    const toSignInAction = () => {
        setIsOpenModal(false);
        navigate('/login');
    }

    useEffect(() => {
        if (error) {
            setErrorMessage((error as IErrorResponse)?.data?.error?.message);
            checkErrorMessage(errorMessage,setValue,setFocus);
        }
    }, [error, errorMessage, setValue, setFocus]);

    useEffect(() => {
        if (isSuccess) {
            setIsOpenModal(true);
            reset();
        }
    }, [isSuccess])

    return (
        <>
            <MForm onSubmit={handleSubmit(onSubmit)} {...props}>
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
                <FormButton disabled={isLoading}>Submit</FormButton>
            </MForm>
            <Modal isOpen={isOpenModal} onCloseModal={toSignInAction}>
                <ModalSuccess/>
            </Modal>
        </>
    );
};
