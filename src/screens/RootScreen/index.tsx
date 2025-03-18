import { StackScreenProps } from '@react-navigation/stack';

import { RootStackParamList } from 'src/types/NavigationTypes';

import { LOGO_IMAGE } from '@constants/common';

import Button from '@components/_common/atoms/Button';
import LinkedText from '@components/_common/atoms/LinkedText';

import S from './style';

export type RootScreenProps = StackScreenProps<RootStackParamList, 'Root'>;

export default function RootScreen({ navigation }: RootScreenProps) {
  const handleLoginPressed = () => {
    navigation.navigate('Login');
  };

  const handleSignUpPressed = () => {
    navigation.navigate('SignUp');
  };

  return (
    <S.Container>
      <S.AppInfo>
        <S.Logo src={LOGO_IMAGE} />
        <S.Title>Friendy</S.Title>
      </S.AppInfo>
      <S.ButtonWrapper>
        <Button
          size='fillContainer'
          color='primary'
          shape='round'
          onPress={handleLoginPressed}
        >
          로그인
        </Button>
        <LinkedText
          color='secondary'
          isUnderlined
          onPress={handleSignUpPressed}
        >
          회원가입
        </LinkedText>
      </S.ButtonWrapper>
    </S.Container>
  );
}
