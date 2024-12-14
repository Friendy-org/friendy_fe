import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../types/NavigationTypes';
import InputField from '../../components/_common/molecules/InputField/InputField';
import Button from '../../components/_common/atoms/Button/Button';
import DotIndicator from '../../components/_common/molecules/DotIndicator/DotIndicator';

export type SignUpScreenProps = StackScreenProps<RootStackParamList, 'SignUp'>;

export default function SignUpScreen({ navigation }: SignUpScreenProps) {
  const [email, setEmail] = useState('');
  const [step, setStep] = useState(1);

  const handlePress = () => {
    setStep(step + 1);
  };

  console.log(step);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>회원가입</Text>
      <InputField
        label='이메일을 입력해 주세요.'
        value={email}
        onChangeText={setEmail}
      />
      <Button onPress={handlePress}>다음</Button>
      <DotIndicator totalStep={step + 1} step={step} />
    </View>
  );
}
