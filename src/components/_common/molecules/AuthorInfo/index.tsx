import React from 'react';
import ProfileImage from '@components/_common/atoms/ProfileImage';

import S, { AuthorInfoStyleProps } from './style';

interface AuthorInfoProps extends AuthorInfoStyleProps {
  imageUrl?: string;
  name: string;
  content?: string;
  time?: string;
}

export default function AuthorInfo({ imageUrl, name, content, time, size = 'md' }: AuthorInfoProps) {
  const profileImageSize = size === 'lg' ? 'sm' : size;

  return (
    <S.Container>
      <ProfileImage
        size={profileImageSize}
        imageUrl={imageUrl}
      />
      <S.InfoWrapper>
        <S.Header>
          <S.Name size={size}>{name}</S.Name>
          {time && <S.Time>{time}</S.Time>}
        </S.Header>
        {content && <S.Content size={size}>{content}</S.Content>}
      </S.InfoWrapper>
    </S.Container>
  );
}
