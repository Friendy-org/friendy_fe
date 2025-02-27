import { DEFAULT_PROFILE_IMAGE } from '@constants/common';
import S, { ProfileImageStyleProps } from './style';

interface ProfileImageProps extends ProfileImageStyleProps {
  imageUrl?: string;
}

export default function ProfileImage({
  imageUrl = DEFAULT_PROFILE_IMAGE,
  size = 'md',
}: ProfileImageProps) {
  return (
    <S.ProfileImage
      size={size}
      source={{
        uri: imageUrl,
      }}
      resizeMode='cover'
    />
  );
}
