import ProfileImage from '../../atoms/ProfileImage/ProfileImage';
import S from './ChangeProfileImageField.styles';

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
