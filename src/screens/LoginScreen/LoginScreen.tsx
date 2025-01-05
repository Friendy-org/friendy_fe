import React from 'react'
import S from "./LoginScreen.styles";
import Button from '../../components/_common/atoms/Button/Button';
import InputField from '../../components/_common/molecules/InputField/InputField';
import PasswordInput from '../../components/PasswordInput/PasswordInput';
import LinkedText from '../../components/_common/atoms/LinkedText/LinkedText';
import { RootScreenProps } from "../RootScreen/RootScreen";
import useForm from '../../hooks/utils/useForm';
import { validateNull } from '../../validations/userValidators';

export default function LoginScreen({ navigation }: RootScreenProps) {

    const { formData, register, handleSubmit } = useForm({
        initialValues: {
            email: '',
            password: '',
        },
    });

    const handlePress = (func: any) => {
        const hasError = handleSubmit(async () => await func());
        if (!hasError) {
            // Todo: navigate to main screen
            navigation.navigate({ name: 'Root', params: undefined });
        }
    }
    const handleLogin = () => {
        // Todo: login API
        console.log('Login complete');
    }
    const handleForgotPassword = () => {
        // Todo: navigate to forgot password screen
    }

    return (
        <S.Layout>
            <S.title>로그인</S.title>
            <S.Section>
                <InputField 
                    label={'이메일'}
                    marginBottom={14}
                    {...register('email', {validate: validateNull})}
                ></InputField>
                <PasswordInput
                    label={'비밀번호'}
                    marginBottom={30}
                    {...register('password', {validate: validateNull})}
                ></PasswordInput>
                <LinkedText onPress={handleForgotPassword}>비밀번호가 기억나지 않나요?</LinkedText>
            </S.Section>
            <Button onPress={() => {handlePress(handleLogin)}}>완료</Button>
        </S.Layout>
    );
};
