import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import EncryptedStorage from 'react-native-encrypted-storage';

import IconButton from '@components/_common/molecules/IconButton';

import { STACK_NAME } from '@constants/navigation';
import { MEMBER_ID_KEY } from '@constants/api';

import { RootStackParamList } from '@customTypes/navigation';

import S from './style';

type TabName = keyof RootStackParamList;

const tabs: { name: TabName; icon: string }[] = [
  { name: 'Explore', icon: 'search' },
  { name: 'Post', icon: 'heart' },
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

  const handlePress = async (tabName: TabName) => {
    if (activeTab === tabName) return;

    if (tabName === 'Explore') {
      navigation.navigate(STACK_NAME.EXPLORE);
    }

    if (tabName === 'Post') {
      navigation.navigate(STACK_NAME.FEED);
    }

    if (tabName === 'Map') {
      navigation.navigate(STACK_NAME.MAP);
    }

    if (tabName === 'DM') {
      navigation.navigate(STACK_NAME.DM);
    }

    if (tabName === 'Profile') {
      const memberId = await EncryptedStorage.getItem(MEMBER_ID_KEY);

      if (!memberId) {
        Error('사용자 ID가 없습니다.');
      }

      navigation.navigate(STACK_NAME.PROFILE, { memberId: Number(memberId) });
    }
  };

  return (
    <S.TabContainer>
      {tabs.map(({ name, icon }) => (
        <IconButton
          key={name}
          onPress={() => handlePress(name)}
          iconName={icon}
          size='md'
          color={activeTab === name ? 'primary' : 'gray'}
          label={name}
        />
      ))}
    </S.TabContainer>
  );
}
