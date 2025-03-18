import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackParamList } from 'src/types/NavigationTypes';
import RootScreen from '@screens/RootScreen';
import LoginScreen from '@screens/LoginScreen';
import SignUpScreen from '@screens/SignUpScreen';
import ResetPasswordScreen from '@screens/ResetPasswordScreen';
import tokenService from '@api/services/tokenService';
import ExploreScreen from '@screens/ExploreScreen';
import FeedScreen from '@screens/FeedScreen';
import MapScreen from '@screens/MapScreen';
import DMScreen from '@screens/DMScreen';
import ProfileScreen from '@screens/ProfileScreen';
import FeedCreateScreen from '@screens/FeedCreateScreen';
import FeedDetailScreen from '@screens/FeedDetailScreen';

const Stack = createStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  const [initialRoute, setInitialRoute] = useState<keyof RootStackParamList>('Root');

  useEffect(() => {
    const checkToken = async () => {
      const token = await tokenService.getAccessToken();
      setInitialRoute(token ? 'Map' : 'Root');
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
          animation: 'fade',
        }}
      >
        <Stack.Screen
          name='Root'
          component={RootScreen}
          options={{ headerShown: false }}
        />
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
        <Stack.Screen
          name='Explore'
          component={ExploreScreen}
        />
        <Stack.Screen
          name='Feed'
          component={FeedScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='FeedCreate'
          component={FeedCreateScreen}
          options={{
            title: '게시글 생성',
          }}
        />
        <Stack.Screen
          name='FeedDetail'
          component={FeedDetailScreen}
        />
        <Stack.Screen
          name='Map'
          component={MapScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='DM'
          component={DMScreen}
          options={{
            title: 'DM',
          }}
        />
        <Stack.Screen
          name='Profile'
          component={ProfileScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
