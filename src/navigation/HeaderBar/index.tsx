import IconButton from '@components/_common/atoms/IconButton';
import React from 'react';
import S from './style';

interface HeaderBarProps {
  showEditButton?: boolean;
}

export default function HeaderBar({ showEditButton = false }: HeaderBarProps) {
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
