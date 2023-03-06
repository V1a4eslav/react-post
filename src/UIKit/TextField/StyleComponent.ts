import {FieldErrors, RegisterOptions, UseFormRegisterReturn} from "react-hook-form";

export interface ITextFieldProps {
    register(name: string, validationRules?: RegisterOptions): UseFormRegisterReturn;
    type?: string | 'text';
    name: string;
    placeholder: string;
    validationRules: RegisterOptions;
    classNameLabel?: string;
    errors: FieldErrors<any>;
    rest?: any;
}


