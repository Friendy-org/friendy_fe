import React from 'react';
import S from './style';

interface AuthorInfoProps {
  profileImageUrl?: string;
  name: string;
  content: string;
}

export default function AuthorInfo({
  profileImageUrl = 'https://i.namu.wiki/i/w7GkIKr6Qac-0SCYEn7DdYBpkpZed9FaVNTBFE7aIQvm7p39bo7gs2Pb1ZWfX3dPVd0JmA3oX50T5kl-MU7wfw.webp',
  name,
  content,
}: AuthorInfoProps) {
  return (
    <S.Container>
      <S.ProfileImage source={{ uri: profileImageUrl }} />
      <S.InfoWrapper>
        <S.Name>{name}</S.Name>
        <S.Location>{content}</S.Location>
      </S.InfoWrapper>
    </S.Container>
  );
}
