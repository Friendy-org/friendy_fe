import IconButton from '@components/_common/atoms/IconButton';
import React from 'react';
import S from './style';
import { MaterialTopTabBarProps } from '@react-navigation/material-top-tabs';

interface HeaderBarProps extends MaterialTopTabBarProps {
  showEditButton?: boolean;
  transparent?: boolean;
}

export default function HeaderBar({
  state,
  descriptors,
  navigation,
  showEditButton = false,
}: HeaderBarProps) {
  console.log(state.routes);
  return (
    <S.HeaderContainer>
      <S.ButtonWrapper>
        {showEditButton && <IconButton iconName='edit' iconSize={25} />}
      </S.ButtonWrapper>
      <S.ImgLogo></S.ImgLogo>
      <S.ButtonWrapper>
        <IconButton iconName='bell' iconSize={25} />
      </S.ButtonWrapper>
    </S.HeaderContainer>
  );
}
