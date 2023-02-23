import {ChangeHandler, FieldErrors, UseFormRegister} from "react-hook-form";

export interface ValidationRules {
    required?: boolean | string;
    pattern?: RegExp | { value: RegExp; message: string };
    minLength?: number | { value: number; message: string };
    maxLength?: number | { value: number; message: string };
    min?: number | { value: number; message: string };
    max?: number | { value: number; message: string };
    validate?: (
        value: any,
        values: Record<string, any>,
    ) => boolean | string | Promise<boolean | string>;
}

export interface ITextFieldProps {
    type?: string,
    placeholder: string,
    classNameInput?: string,
    name: string
    classNameLabel?: string,
    value?: string,
    onChange?: ChangeHandler,
    disabled?: boolean,
    validationRules?: ValidationRules,
    register: UseFormRegister<any>,
    errors: FieldErrors
}


