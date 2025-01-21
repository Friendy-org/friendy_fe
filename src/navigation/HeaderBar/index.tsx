import IconButton from '@components/_common/atoms/IconButton';
import React from 'react';
import S from './style';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'src/types/NavigationTypes';

interface HeaderBarProps {
  showEditButton?: boolean;
}

type NavigationProp = StackNavigationProp<RootStackParamList>;

export default function HeaderBar({ showEditButton = false }: HeaderBarProps) {
  const navigation = useNavigation<NavigationProp>();

  const handleEditButton = () => {
    navigation.navigate('FeedCreate');
  };

  return (
    <S.HeaderContainer>
      <S.ButtonWrapper>
        {showEditButton && <IconButton onPress={handleEditButton} iconName='edit' iconSize={25} />}
      </S.ButtonWrapper>
      <S.ImgLogo></S.ImgLogo>
      <S.ButtonWrapper>
        <IconButton iconName='bell' iconSize={25} />
      </S.ButtonWrapper>
    </S.HeaderContainer>
  );
}
