import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackParamList } from 'src/types/NavigationTypes';
import RootScreen from '@screens/RootScreen';
import LoginScreen from '@screens/LoginScreen';
import SignUpScreen from '@screens/SignUpScreen';
import ResetPasswordScreen from '@screens/ResetPasswordScreen';
import tokenService from '@api/services/tokenService';
import TabNavigator from './TabNavigator';

const Stack = createStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  const [initialRoute, setInitialRoute] = useState<keyof RootStackParamList>('Root');

  useEffect(() => {
    const checkToken = async () => {
      const token = await tokenService.getAccessToken();
      setInitialRoute(token ? 'Main' : 'Root');
    };

    checkToken();
  }, []);

  if (initialRoute === null) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={initialRoute}
        screenOptions={{
          headerBackButtonDisplayMode: 'minimal',
          headerShadowVisible: false,
        }}
      >
        <Stack.Screen name='Root' component={RootScreen} options={{ headerShown: false }} />
        <Stack.Screen
          name='Login'
          component={LoginScreen}
          options={{
            title: '로그인',
          }}
        />
        <Stack.Screen
          name='SignUp'
          component={SignUpScreen}
          options={{
            title: '회원가입',
          }}
        />
        <Stack.Screen
          name='ResetPassword'
          component={ResetPasswordScreen}
          options={{
            title: '비밀번호 재설정',
          }}
        />
        <Stack.Screen name='Main' component={TabNavigator} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
