import React from 'react';
import {IFormProps} from "../../../UIKit/Form/StyleComponent";
import {Form} from "../../../UIKit/Form/Form";
import {Title} from "../../../UIKit/Title/Title";
import {ViewLink} from "../../../UIKit/ViewLinks/ViewLink";
import {Button} from "../../../UIKit/Button/Button";
import {TextField} from "../../../UIKit/TextField/TextField";


export const RegisterForm = (props: IFormProps) => {
    // const {fields, setFields, handleSubmit,onFieldChange} = useForm({
    //     'name':'',
    //     'email': '',
    //     'password': ''
    // });
    return (
        <Form{...props}>
            <Title align='center' variant='h1'>Sign up</Title>
            <ViewLink to='/login'>Have an account?</ViewLink>
            {/*<TextField fieldChange={onFieldChange} type='text' name='name' placeholder='Name'/>*/}
            {/*<TextField fieldChange={onFieldChange} type='email' name='email' placeholder='Email'/>*/}
            {/*<TextField fieldChange={onFieldChange} type='password' name='password' placeholder='Password'/>*/}
            <Button>Submit</Button>
        </Form>
    );
};
