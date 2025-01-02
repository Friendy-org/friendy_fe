import React from "react";
import S from "./RootScreen.styles";
import Button from "../../components/_common/atoms/Button/Button";
import LinkedText from "../../components/_common/atoms/LinkedText/LinkedText";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../types/NavigationTypes";

export type RootScreenProps = StackScreenProps<RootStackParamList, 'Root'>;

export default function RootScreen({ navigation }: RootScreenProps) {
    const handlePress = (func: any) => {
        func();
    }

    const handleLoginPressed = () => {
        // todo: 로그인 화면 이동
        console.log('Login Pressed');
    }
    const handleSignUpPressed = () => {
        navigation.navigate('SignUp');
    }

    return (
        <S.Layout>
            <S.Container>
                <S.imgLogo></S.imgLogo>
                <S.title>Friendy</S.title>
            </S.Container>
            <S.Container>
                <S.marginedButton margin={15}> 
                    <Button onPress={() => handlePress(handleLoginPressed)}>로그인</Button>
                </S.marginedButton>
                <LinkedText onPress={() => handlePress(handleSignUpPressed)}>회원가입</LinkedText>
            </S.Container>
        </S.Layout>
    );
}