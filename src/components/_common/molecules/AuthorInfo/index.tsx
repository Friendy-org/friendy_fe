import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { STACK_NAME } from '@constants/navigation';

import { MemberData } from '@customTypes/member';
import { NavigationProp } from '@customTypes/navigation';

import ProfileImage from '@components/_common/atoms/ProfileImage';

import S, { AuthorInfoStyleProps } from './style';

interface AuthorInfoProps extends MemberData, AuthorInfoStyleProps {
  content?: string;
}

export default function AuthorInfo({ id, nickname, profileImageUrl, content, size = 'md' }: AuthorInfoProps) {
  const navigation = useNavigation<NavigationProp>();

  const handleNavigate = () => {
    navigation.navigate(STACK_NAME.PROFILE, { memberId: id });
  };

  return (
    <S.Container onPress={handleNavigate}>
      <ProfileImage
        size={size}
        imageUrl={profileImageUrl}
      />
      <S.InfoWrapper>
        <S.Name size={size}>{nickname}</S.Name>
        {content && <S.Content size={size}>{content}</S.Content>}
      </S.InfoWrapper>
    </S.Container>
  );
}
