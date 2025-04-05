import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '@customTypes/navigation';

import { LOGO_IMAGE } from '@constants/common';
import { STACK_NAME } from '@constants/navigation';

import IconButton from '@components/_common/molecules/IconButton';

import S from './style';

interface HeaderBarProps {
  showUpdateButton?: boolean;
  showLogo?: boolean;
  showSetting?: boolean;
}

type NavigationProp = StackNavigationProp<RootStackParamList>;

export default function HeaderBar({ showUpdateButton, showLogo, showSetting }: HeaderBarProps) {
  const navigation = useNavigation<NavigationProp>();

  const handleUpdate = () => {
    navigation.navigate(STACK_NAME.FEED_CREATE);
  };

  const handleSetting = () => {
  };

  const handleAlarm = () => {
  };

  return (
    <S.HeaderContainer>
      <S.ButtonWrapper>
        {showUpdateButton && (
          <IconButton
            onPress={handleUpdate}
            iconName='edit'
            size='md'
            color='default'
          />
        )}
      </S.ButtonWrapper>
      {showLogo && <S.Logo src={LOGO_IMAGE} />}
      <IconButton
        iconName={showSetting ? 'settings' : 'bell'}
        size='md'
        color='default'
        onPress={showSetting ? handleSetting : handleAlarm}
      />
    </S.HeaderContainer>
  );
}
