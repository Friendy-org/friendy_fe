import S from './ProfileImage.styles';

interface ProfileImageProps {
  imageUrl?: string;
}

export default function ProfileImage({
  imageUrl = 'https://www.studiopeople.kr/common/img/default_profile.png',
}: ProfileImageProps) {
  return (
    <S.ProfileImage
      source={{
        uri: imageUrl,
      }}
      resizeMode='cover'
    />
  );
}
