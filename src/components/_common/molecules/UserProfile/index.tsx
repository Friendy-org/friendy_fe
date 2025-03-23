import React from 'react';

import useSelectImage from '@hooks/utils/useSelectImage';

import ProfileImage from '@components/_common/atoms/ProfileImage';
import LinkedText from '@components/_common/atoms/LinkedText';
import S, { UserProfileStyleProps } from './style';

interface UserProfileProps extends UserProfileStyleProps {
  imageUrl?: string;
  info?: string;
  text?: string;
  onSelectImage?: (url: string) => void;
}

export default function UserProfile({ size, imageUrl, info, text, onSelectImage }: UserProfileProps) {
  const { selectAndUpload, isLoading } = useSelectImage();

  const handleSelectImage = () => {
    selectAndUpload((uploadedUrl: string) => {
      onSelectImage?.(uploadedUrl);
    });
  };

  return (
    <S.UserProfile>
      <ProfileImage
        size='lg'
        imageUrl={imageUrl}
      />
      {info && <S.Info size={size}>{info}</S.Info>}
      {text && (
        <LinkedText
          color='primary'
          onPress={handleSelectImage}
        >
          {isLoading ? '업로드 중...' : text}
        </LinkedText>
      )}
    </S.UserProfile>
  );
}
