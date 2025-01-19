import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ExploreScreen from '@screens/ExploreScreen';
import FeedScreen from '@screens/FeedScreen';
import MapScreen from '@screens/MapScreen';
import DMScreen from '@screens/DMScreen';
import ProfileScreen from '@screens/ProfileScreen';
import HeaderBar from './HeaderBar';

const TopTab = createMaterialTopTabNavigator();

export function ExploreTopTabs() {
  return (
    <TopTab.Navigator tabBar={props => <HeaderBar {...props} />}>
      <TopTab.Screen name='ExploreTopTab' component={ExploreScreen} />
    </TopTab.Navigator>
  );
}

export function FeedTopTabs() {
  return (
    <TopTab.Navigator tabBar={props => <HeaderBar {...props} showEditButton={true} />}>
      <TopTab.Screen name='FeedTopTab' component={FeedScreen} />
    </TopTab.Navigator>
  );
}

export function MapTopTabs() {
  return (
    <TopTab.Navigator tabBar={props => <HeaderBar {...props} />}>
      <TopTab.Screen name='MapTopTab' component={MapScreen} />
    </TopTab.Navigator>
  );
}

export function DMTopTabs() {
  return (
    <TopTab.Navigator tabBar={props => <HeaderBar {...props} />}>
      <TopTab.Screen name='DMTopTab' component={DMScreen} />
    </TopTab.Navigator>
  );
}

export function ProfileTopTabs() {
  return (
    <TopTab.Navigator tabBar={props => <HeaderBar {...props} />}>
      <TopTab.Screen name='ProfileTopTab' component={ProfileScreen} />
    </TopTab.Navigator>
  );
}
