import { TouchableOpacity } from 'react-native';
import { DEFAULT_PROFILE_IMAGE } from '@constants/common';
import S, { ProfileImageStyleProps } from './style';

interface ProfileImageProps extends ProfileImageStyleProps {
  imageUrl?: string;
  onPress?: () => void;
}

export default function ProfileImage({ size = 'md', imageUrl = DEFAULT_PROFILE_IMAGE, onPress }: ProfileImageProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <S.ProfileImage
        size={size}
        source={{
          uri: imageUrl,
        }}
        resizeMode='cover'
      />
    </TouchableOpacity>
  );
}
