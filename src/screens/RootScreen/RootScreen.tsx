import React from 'react';
import S from './RootScreen.styles';
import Button from '../../components/_common/atoms/Button/Button';
import LinkedText from '../../components/_common/atoms/LinkedText/LinkedText';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../types/NavigationTypes';

export type RootScreenProps = StackScreenProps<RootStackParamList, 'Root'>;

export default function RootScreen({ navigation }: RootScreenProps) {
  const handlePress = (func: any) => {
    func();
  };

  const handleLoginPressed = () => {
    navigation.navigate('Login');
  };
  const handleSignUpPressed = () => {
    navigation.navigate('SignUp');
  };

  return (
    <S.AppContainer>
      <S.Layout>
        <S.Container>
          <S.ImgLogo></S.ImgLogo>
          <S.Title>Friendy</S.Title>
        </S.Container>
        <S.Container>
          <S.MarginedButton margin={15}>
            <Button onPress={() => handlePress(handleLoginPressed)}>로그인</Button>
          </S.MarginedButton>
          <LinkedText onPress={() => handlePress(handleSignUpPressed)}>회원가입</LinkedText>
        </S.Container>
      </S.Layout>
    </S.AppContainer>
  );
}
