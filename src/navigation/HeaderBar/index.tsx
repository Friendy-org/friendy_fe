import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '@customTypes/navigation';

import { LOGO_IMAGE } from '@constants/common';
import { STACK_NAME } from '@constants/navigation';

import IconButton from '@components/_common/molecules/IconButton';

import S from './style';

interface HeaderBarProps {
  showEditButton?: boolean;
}

type NavigationProp = StackNavigationProp<RootStackParamList>;

export default function HeaderBar({ showEditButton = false }: HeaderBarProps) {
  const navigation = useNavigation<NavigationProp>();

  const handleEditButton = () => {
    navigation.navigate(STACK_NAME.FEED_CREATE);
  };

  return (
    <S.HeaderContainer>
      <S.ButtonWrapper>
        {showEditButton && (
          <IconButton
            onPress={handleEditButton}
            iconName='edit'
            size='md'
            color='default'
          />
        )}
      </S.ButtonWrapper>
      <S.Logo src={LOGO_IMAGE} />
      <IconButton
        iconName='bell'
        size='md'
        color='default'
      />
    </S.HeaderContainer>
  );
}
