import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from 'src/types/NavigationTypes';
import S from './style';
import Button from '@components/_common/atoms/Button';
import LinkedText from '@components/_common/atoms/LinkedText';

export type RootScreenProps = StackScreenProps<RootStackParamList, 'Root'>;

export default function RootScreen({ navigation }: RootScreenProps) {
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
            <Button size='fillContainer' color='primary' shape='round' onPress={handleLoginPressed}>
              로그인
            </Button>
          </S.MarginedButton>
          <LinkedText color='secondary' isUnderlined onPress={handleSignUpPressed}>
            회원가입
          </LinkedText>
        </S.Container>
      </S.Layout>
    </S.AppContainer>
  );
}
