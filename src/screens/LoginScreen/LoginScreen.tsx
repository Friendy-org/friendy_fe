import React from 'react'
import S from "./LoginScreen.styles";
import Button from '../../components/_common/atoms/Button/Button';
import InputField from '../../components/_common/molecules/InputField/InputField';
import PasswordInput from '../../components/PasswordInput/PasswordInput';
import LinkedText from '../../components/_common/atoms/LinkedText/LinkedText';
import { RootScreenProps } from "../RootScreen/RootScreen";

export default function LoginScreen({ navigation }: RootScreenProps) {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleLogin = () => {
        // Todo: Implement login logic
    }
    const handleForgotPassword = () => {
        // Todo: Implement forgot password logic
    }

    return (
        <S.Layout>
            <S.title>로그인</S.title>
            <S.Section>
                <InputField 
                    label={'이메일'} 
                    value={email}
                    onChange={function (text: string): void { setEmail(text); }}
                    marginBottom={14}
                ></InputField>
                <PasswordInput
                    label={'비밀번호'}
                    value={password}
                    onChange={function (text: string): void { setPassword(text); }}
                    marginBottom={30}
                ></PasswordInput>
                <LinkedText onPress={handleForgotPassword}>비밀번호가 기억나지 않나요?</LinkedText>
            </S.Section>
            <Button onPress={handleLogin}>완료</Button>
        </S.Layout>
    );
};
