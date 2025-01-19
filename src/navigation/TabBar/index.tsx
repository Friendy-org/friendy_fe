import React from 'react';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import IconButton from '@components/_common/atoms/IconButton';
import S from './style';

const icons: Record<string, string> = {
  Explore: 'search',
  Feed: 'heart',
  Map: 'globe',
  DM: 'send',
  Profile: 'user',
};

export default function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  return (
    <S.TabContainer>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;

        const onPress = () => {
          if (!isFocused) {
            navigation.navigate(route.name);
          }
        };

        return (
          <IconButton
            key={route.key}
            onPress={onPress}
            iconName={icons[route.name] || 'default-icon'}
            iconSize={25}
            color={isFocused ? '#009235' : '#000000'}
            label={route.name}
          />
        );
      })}
    </S.TabContainer>
  );
}
