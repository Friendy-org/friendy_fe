import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen';
import RootScreen from '../screens/RootScreen/RootScreen';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import { RootStackParamList } from '../types/NavigationTypes';

const Stack = createStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Root'
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
            title: '회원 가입',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
