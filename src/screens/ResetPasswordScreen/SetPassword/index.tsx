import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { FormRegister } from '@customTypes/common';
import { RootStackParamList } from 'src/types/NavigationTypes';

import Button from '@components/_common/atoms/Button';
import InputField from '@components/_common/molecules/InputField';

import S from './style';

interface SetPasswordProps<TFieldData> {
  passwordRegister: FormRegister;
  confirmPasswordRegister: FormRegister;
  handlePress: (callback: () => Promise<void>, excludeFields?: (keyof TFieldData)[]) => () => void;
}

type NavigationProp = StackNavigationProp<RootStackParamList>;

export default function SetPassword<TFieldData>({
  passwordRegister,
  confirmPasswordRegister,
  handlePress,
}: SetPasswordProps<TFieldData>) {
  const navigation = useNavigation<NavigationProp>();

  const handleResetPassword = async () => {
    // Todo: 비밀번호 재설정 API
    navigation.goBack();
  };

  return (
    <S.Container>
      <S.InputForm>
        <InputField
          type='password'
          label='비밀번호'
          {...passwordRegister}
        />

        <InputField
          type='password'
          label='비밀번호 확인'
          {...confirmPasswordRegister}
        />
      </S.InputForm>

      <Button
        size='fillContainer'
        color='primary'
        shape='round'
        onPress={handlePress(handleResetPassword)}
      >
        완료
      </Button>
    </S.Container>
  );
}
