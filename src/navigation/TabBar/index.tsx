import React from 'react';
import IconButton from '@components/_common/atoms/IconButton';
import S from './style';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'src/types/NavigationTypes';
import { useNavigation } from '@react-navigation/native';

type TabName = keyof RootStackParamList;

const tabs: { name: TabName; icon: string }[] = [
  { name: 'Explore', icon: 'search' },
  { name: 'Feed', icon: 'heart' },
  { name: 'Map', icon: 'globe' },
  { name: 'DM', icon: 'send' },
  { name: 'Profile', icon: 'user' },
];

type NavigationProp = StackNavigationProp<RootStackParamList>;

interface TabBarProps {
  activeTab: TabName;
}

export default function TabBar({ activeTab }: TabBarProps) {
  const navigation = useNavigation<NavigationProp>();

  const handlePress = (tabName: TabName) => {
    if (activeTab !== tabName) {
      navigation.navigate(tabName);
    }
  };

  return (
    <S.TabContainer>
      {tabs.map(({ name, icon }) => (
        <IconButton
          key={name}
          onPress={() => handlePress(name)}
          iconName={icon}
          iconSize={25}
          color={activeTab === name ? '#009235' : '#000000'}
          label={name}
        />
      ))}
    </S.TabContainer>
  );
}
