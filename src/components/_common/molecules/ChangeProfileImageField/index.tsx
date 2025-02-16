import ProfileImage from '@components/_common/atoms/ProfileImage';
import S from './style';
import LinkedText from '@components/_common/atoms/LinkedText';

interface ChangeProfileImageFieldProps {
  imageUrl?: string;
  text: string;
}

export default function ChangeProfileImageField({ imageUrl, text }: ChangeProfileImageFieldProps) {
  const handlePress = () => {};

  return (
    <S.Wrapper>
      <ProfileImage imageUrl={imageUrl} />
      <LinkedText color='primary' onPress={handlePress}>
        {text}
      </LinkedText>
    </S.Wrapper>
  );
}
