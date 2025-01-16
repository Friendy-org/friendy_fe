import ProfileImage from '@components/_common/atoms/ProfileImage';
import S from './style';

interface ChangeProfileImageFieldProps {
  imageUrl?: string;
  buttonText: string;
}

export default function ChangeProfileImageField({
  imageUrl,
  buttonText,
}: ChangeProfileImageFieldProps) {
  return (
    <S.Wrapper>
      <ProfileImage imageUrl={imageUrl} />
      <S.ChangeProfileImageButton>
        <S.ButtonText>{buttonText}</S.ButtonText>
      </S.ChangeProfileImageButton>
    </S.Wrapper>
  );
}
