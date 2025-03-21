import React from 'react';
import { launchImageLibrary } from 'react-native-image-picker';

import useUploadImage from '@hooks/upload/useUploadImage';

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
  const { uploadImageMutate, isLoading } = useUploadImage();

  const handleSelectImage = async () => {
    const result = await launchImageLibrary({ mediaType: 'photo' });

    if (result.didCancel || !result.assets || result.assets.length === 0) return;

    const asset = result.assets[0];

    if (!asset.uri || !asset.fileName || !asset.type) return;

    const file = {
      uri: asset.uri,
      fileName: asset.fileName,
      type: asset.type,
    };

    uploadImageMutate(file, {
      onSuccess: ({ uploadedImageUrl }) => {
        onSelectImage?.(uploadedImageUrl);
      },
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
