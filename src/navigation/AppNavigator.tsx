import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackParamList } from '@customTypes/navigation';
import RootScreen from '@screens/RootScreen';
import LoginScreen from '@screens/LoginScreen';
import SignUpScreen from '@screens/SignUpScreen';
import ResetPasswordScreen from '@screens/ResetPasswordScreen';
import ExploreScreen from '@screens/ExploreScreen';
import FeedScreen from '@screens/FeedScreen';
import MapScreen from '@screens/MapScreen';
import DMScreen from '@screens/DMScreen';
import ProfileScreen from '@screens/ProfileScreen';
import FeedCreateScreen from '@screens/FeedCreateScreen';
import FeedDetailScreen from '@screens/FeedDetailScreen';
import { STACK_NAME } from '@constants/navigation';

const Stack = createStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={STACK_NAME.ROOT}
        screenOptions={{
          headerBackButtonDisplayMode: 'minimal',
          headerShadowVisible: false,
          animation: 'fade',
        }}
      >
        <Stack.Screen
          name={STACK_NAME.ROOT}
          component={RootScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={STACK_NAME.LOGIN}
          component={LoginScreen}
          options={{
            title: '로그인',
          }}
        />
        <Stack.Screen
          name={STACK_NAME.SIGNUP}
          component={SignUpScreen}
          options={{
            title: '회원가입',
          }}
        />
        <Stack.Screen
          name={STACK_NAME.RESET_PASSWORD}
          component={ResetPasswordScreen}
          options={{
            title: '비밀번호 재설정',
          }}
        />
        <Stack.Screen
          name={STACK_NAME.EXPLORE}
          component={ExploreScreen}
        />
        <Stack.Screen
          name={STACK_NAME.FEED}
          component={FeedScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={STACK_NAME.FEED_CREATE}
          component={FeedCreateScreen}
          options={{
            title: '게시글 생성',
          }}
        />
        <Stack.Screen
          name={STACK_NAME.FEED_DETAIL}
          component={FeedDetailScreen}
        />
        <Stack.Screen
          name={STACK_NAME.MAP}
          component={MapScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={STACK_NAME.DM}
          component={DMScreen}
          options={{
            title: 'DM',
          }}
        />
        <Stack.Screen
          name={STACK_NAME.PROFILE}
          component={ProfileScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
