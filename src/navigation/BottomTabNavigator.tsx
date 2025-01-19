import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBar from './TabBar';
import {
  DMTopTabs,
  ExploreTopTabs,
  FeedTopTabs,
  MapTopTabs,
  ProfileTopTabs,
} from './TopTabNavigator';

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName='Map'
      tabBar={props => <TabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <BottomTab.Screen
        name='Explore'
        component={ExploreTopTabs}
        options={{ tabBarLabel: 'Explore' }}
      />
      <BottomTab.Screen name='Feed' component={FeedTopTabs} options={{ tabBarLabel: 'Feed' }} />
      <BottomTab.Screen name='Map' component={MapTopTabs} options={{ tabBarLabel: 'Map' }} />
      <BottomTab.Screen name='DM' component={DMTopTabs} options={{ tabBarLabel: 'DM' }} />
      <BottomTab.Screen
        name='Profile'
        component={ProfileTopTabs}
        options={{ tabBarLabel: 'Profile' }}
      />
    </BottomTab.Navigator>
  );
}
