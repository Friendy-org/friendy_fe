import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ExploreScreen from '@screens/ExploreScreen';
import FeedScreen from '@screens/FeedScreen';
import MapScreen from '@screens/MapScreen';
import DMScreen from '@screens/DMScreen';
import ProfileScreen from '@screens/ProfileScreen';
import TabBar from './TabBar';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName='Map'
      tabBar={props => <TabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name='Explore' component={ExploreScreen} options={{ tabBarLabel: 'Explore' }} />
      <Tab.Screen name='Feed' component={FeedScreen} options={{ tabBarLabel: 'Feed' }} />
      <Tab.Screen name='Map' component={MapScreen} options={{ tabBarLabel: 'Map' }} />
      <Tab.Screen name='DM' component={DMScreen} options={{ tabBarLabel: 'DM' }} />
      <Tab.Screen name='Profile' component={ProfileScreen} options={{ tabBarLabel: 'Profile' }} />
    </Tab.Navigator>
  );
}
