import React from 'react';
import S, { AuthorInfoStyleProps } from './style';

interface AuthorInfoProps extends AuthorInfoStyleProps {
  profileImageUrl?: string;
  name: string;
  content: string;
}

export default function AuthorInfo({
  profileImageUrl = 'https://i.namu.wiki/i/w7GkIKr6Qac-0SCYEn7DdYBpkpZed9FaVNTBFE7aIQvm7p39bo7gs2Pb1ZWfX3dPVd0JmA3oX50T5kl-MU7wfw.webp',
  name,
  content,
  size = 'md',
}: AuthorInfoProps) {
  return (
    <S.Container>
      <S.ProfileImage size={size} source={{ uri: profileImageUrl }} />
      <S.InfoWrapper>
        <S.Name size={size}>{name}</S.Name>
        <S.Content>{content}</S.Content>
      </S.InfoWrapper>
    </S.Container>
  );
}
