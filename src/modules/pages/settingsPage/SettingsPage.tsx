import React, {useCallback, useEffect} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {Title} from 'src/UIKit/Title/Title';
import {useAppSelector} from "../../../hook/redux";
import {
    SSettingsContainer,
    SSettingsEmail,
    SSettingsForm,
    SSettingsImage, SSettingsLogOutBtn,
    SSettingsName, SSettingsPassword,
    SSettingsTextarea, SSettingsUpdateBtn
} from "./StyledComponent";
import {useNavigate} from "react-router";
import {useUpdateSettingsMutation} from "../../../app/repository/realWorld/RealWorldApi";
import {useActions} from "../../../hook/actions";

export const SettingsPage = () => {
    const navigate = useNavigate();
    const {logoutUser} = useActions();
    const user = useAppSelector(state => state.user);
    const [updateSettings, {data, isSuccess, isLoading}] = useUpdateSettingsMutation();

    const clearUser = useCallback(() => {
        logoutUser()
    }, [],);

    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: {errors}
    } = useForm<any>();

    const onSubmit: SubmitHandler<any> = useCallback(async (data) => {
        console.log(data);
    }, []);


    useEffect(() => {
        if (user) {
            setValue('image', user.userData.image);
            setValue('name', user.userData.username);
            setValue('bio', user.userData.bio);
            setValue('email', user.userData.email);
        }
    }, [user, setValue]);

    return (
        <SSettingsContainer>
            <Title variant={'h1'} align='center'>Your Settings</Title>
            <SSettingsForm onSubmit={handleSubmit(onSubmit)}>
                <SSettingsImage register={register}
                                name='image'
                                placeholder='Image Profile'
                                errors={errors}
                                validationRules={{
                                    required: 'Required field',
                                }}/>
                <SSettingsName register={register}
                               name='name'
                               placeholder='Username'
                               errors={errors}
                               validationRules={{
                                   required: 'Required field',
                               }}/>
                <SSettingsTextarea register={register}
                                   name='bio'
                                   placeholder='Article Title'
                                   errors={errors}
                />
                <SSettingsEmail register={register}
                                name='email'
                                placeholder='Email'
                                errors={errors}
                                validationRules={{
                                    required: 'Required field',
                                }}/>
                <SSettingsPassword register={register}
                                   name='password'
                                   placeholder='Password'
                                   errors={errors}
                                   validationRules={{
                                       minLength: {
                                           value: 8,
                                           message: "Minimum eight characters"
                                       },
                                       pattern: {
                                           value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                                           message: "At least one uppercase letter, one lowercase letter and one number."
                                       }
                                   }}/>
                <SSettingsUpdateBtn>Update Settings</SSettingsUpdateBtn>
            </SSettingsForm>
            <SSettingsLogOutBtn onClick={clearUser}>
                Or click here to logout.
            </SSettingsLogOutBtn>
        </SSettingsContainer>
    );
};
