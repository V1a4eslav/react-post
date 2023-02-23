import React from 'react';
import {Label} from "./components/Label/Label";
import {FormGroup} from "./components/FormGroup/FormGroup";
import {Input} from "./components/Input/Input";
import {ITextFieldProps} from './StyleComponent';
import {StyledInput} from "./components/Input/StyleComponent";


export const TextField = (props: ITextFieldProps) => {
    const { register, errors, validationRules, ...rest } = props;

    return (
        <FormGroup>
            <StyledInput {...props}/>
            {/*<Input*/}
            {/*    {...register(props.name, validationRules)}*/}
            {/*    {...rest}*/}
            {/*/>*/}
            <Label className={props.classNameLabel ? props.classNameLabel : ''}>
                {props.placeholder}
            </Label>
            {/*{errors[props.name] && (*/}
            {/*    <p>{errors[props.name].message}</p>*/}
            {/*)}*/}
        </FormGroup>
    );
};
