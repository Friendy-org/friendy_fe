import React from 'react';
import S from './style';

interface AuthorInfoProps {
  profileImageUrl?: string;
  name: string;
  location: string;
}

export default function AuthorInfo({ profileImageUrl, name, location }: AuthorInfoProps) {
  return (
    <S.Container>
      <S.ProfileImage />
      <S.InfoWrapper>
        <S.Name>{name}</S.Name>
        <S.Location>{location}</S.Location>
      </S.InfoWrapper>
    </S.Container>
  );
}
