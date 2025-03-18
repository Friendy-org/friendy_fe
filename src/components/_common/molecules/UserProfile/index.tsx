import ProfileImage from '@components/_common/atoms/ProfileImage';
import LinkedText from '@components/_common/atoms/LinkedText';
import S, { UserProfileStyleProps } from './style';

interface UserProfileProps extends UserProfileStyleProps {
  imageUrl?: string;
  info?: string;
  text?: string;
  onPress?: () => void;
}

export default function UserProfile({ size, imageUrl, info, text, onPress }: UserProfileProps) {
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
          onPress={onPress}
        >
          {text}
        </LinkedText>
      )}
    </S.UserProfile>
  );
}
