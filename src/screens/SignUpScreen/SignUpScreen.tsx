import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../types/NavigationTypes';
import InputField from '../../components/_common/molecules/InputField/InputField';

export type SignUpScreenProps = StackScreenProps<RootStackParamList, 'SignUp'>;

export default function SignUpScreen({ navigation }: SignUpScreenProps) {
  const [email, setEmail] = useState('');

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>회원가입</Text>
      <InputField
        label='이메일을 입력해 주세요.'
        value={email}
        onChangeText={setEmail}
      />
    </View>
  );
}
