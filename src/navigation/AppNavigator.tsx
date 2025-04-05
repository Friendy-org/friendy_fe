import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackParamList } from '@customTypes/navigation';
import RootScreen from '@screens/RootScreen';
import LoginScreen from '@screens/LoginScreen';
import SignUpScreen from '@screens/SignUpScreen';
import ResetPasswordScreen from '@screens/ResetPasswordScreen';
import ExploreScreen from '@screens/ExploreScreen';
import PostScreen from '@screens/PostScreen';
import MapScreen from '@screens/MapScreen';
import DMScreen from '@screens/DMScreen';
import ProfileScreen from '@screens/ProfileScreen';
import PostCreateScreen from '@screens/PostCreateScreen';
import PostDetailScreen from '@screens/PostDetailScreen';
import PostUpdateScreen from '@screens/PostUpdateScreen';
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
          component={PostScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={STACK_NAME.FEED_CREATE}
          component={PostCreateScreen}
          options={{
            title: '게시글 생성',
          }}
        />
        <Stack.Screen
          name={STACK_NAME.FEED_UPDATE}
          component={PostUpdateScreen}
          options={{
            title: '게시글 생성',
          }}
        />
        <Stack.Screen
          name={STACK_NAME.FEED_DETAIL}
          component={PostDetailScreen}
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
