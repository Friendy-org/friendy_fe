import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ExploreScreen from '@screens/ExploreScreen';
import FeedScreen from '@screens/FeedScreen';
import MapScreen from '@screens/MapScreen';
import DMScreen from '@screens/DMScreen';
import ProfileScreen from '@screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const icons: Record<string, string> = {
  Explore: 'search',
  Feed: 'favorite-border',
  Map: 'place',
  DM: 'chat-bubble-outline',
  Profile: 'person-outline',
};

export default function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName='Map'
      screenOptions={({ route }: { route: { name: string } }): BottomTabNavigationOptions => ({
        headerShown: false,
        tabBarStyle: {
          height: 70,
          backgroundColor: '#FAFAFA',
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarItemStyle: {
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        },
        tabBarActiveTintColor: '#39C25E',
        tabBarInactiveTintColor: '#000000',
        tabBarIcon: ({ color }: { color: string }) => {
          const iconName = icons[route.name] || 'default-icon';
          return <Icon name={iconName} size={25} color={color} />;
        },
      })}
    >
      <Tab.Screen name='Explore' component={ExploreScreen} options={{ tabBarLabel: 'Explore' }} />
      <Tab.Screen name='Feed' component={FeedScreen} options={{ tabBarLabel: 'Feed' }} />
      <Tab.Screen name='Map' component={MapScreen} options={{ tabBarLabel: 'Map' }} />
      <Tab.Screen name='DM' component={DMScreen} options={{ tabBarLabel: 'DM' }} />
      <Tab.Screen name='Profile' component={ProfileScreen} options={{ tabBarLabel: 'Profile' }} />
    </Tab.Navigator>
  );
}
