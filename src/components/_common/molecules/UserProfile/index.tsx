import ProfileImage from '@components/_common/atoms/ProfileImage';
import S, { UserProfileStyleProps } from './style';
import LinkedText from '@components/_common/atoms/LinkedText';

interface UserProfileProps extends UserProfileStyleProps {
  imageUrl?: string;
  info?: string;
  text?: string;
  onPress?: () => void;
}

export default function UserProfile({ size, imageUrl, info, text, onPress }: UserProfileProps) {
  return (
    <S.UserProfile>
      <ProfileImage imageUrl={imageUrl} />
      {info && <S.Info size={size}></S.Info>}
      {text && (
        <LinkedText color='primary' onPress={onPress}>
          {text}
        </LinkedText>
      )}
    </S.UserProfile>
  );
}
