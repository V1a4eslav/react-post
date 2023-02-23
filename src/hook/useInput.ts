import {ChangeEvent, useState} from "react";
import {useValidation} from "./useValidation";

export const useInput = (initialValue: string, validation: any) => {
    const [value, setValue] = useState(initialValue);
    const [isDirty, setIsDirty] = useState(false);

    const valid = useValidation(value, validation);

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        setIsDirty(true);

    }

    const onBlur = () => {
        setIsDirty(true);
    }

    return {value, onChange, onBlur, ...valid, isDirty}
}