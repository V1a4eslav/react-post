import React from "react";
import {IFormProps} from "../../../UIKit/Form/StyleComponent";
import {Form} from "../../../UIKit/Form/Form";
import {Title} from "../../../UIKit/Title/Title";
import {ViewLink} from "../../../UIKit/ViewLinks/ViewLink";
import {TextField} from "../../../UIKit/TextField/TextField";
import {Button} from "../../../UIKit/Button/Button";
import {SubmitHandler, useForm} from "react-hook-form";

interface IFormValues {
    email: string,
    password: string,
    confirmPassword: string,
};

export const LoginForm = (props: IFormProps) => {
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<IFormValues>();

    const onSubmit: SubmitHandler<IFormValues> = data => console.log(data);

    return (
        <Form onSubmit={handleSubmit(onSubmit)} {...props}>
            <Title align='center' variant='h1'>Sign In</Title>
            <ViewLink to='/register'>Need an account?</ViewLink>
            <TextField
                register={register}
                type='email'
                name='email'
                placeholder='Email'
                errors={errors}
                validationRules={
                {required: true,
                    pattern: /^\S+@\S+$/i}
            }
            />
            <TextField
                register={register}
                type='password'
                name='password'
                placeholder='Password'
                errors={errors}
                validationRules={{required: true, pattern: /^\S+@\S+$/i}}
            />
            <Button>Submit</Button>
        </Form>
    );
};
