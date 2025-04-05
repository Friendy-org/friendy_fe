import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@customTypes/navigation';
import { MemberDetailData } from '@customTypes/member';
import { STACK_NAME } from '@constants/navigation';
import UserProfile from '@components/_common/molecules/UserProfile';
import LinkedText from '@components/_common/atoms/LinkedText';

import S from './style';

export default function MemberInfo({
  me,
  email,
  nickname,
  profileImageUrl,
  followerCount,
  followingCount,
}: MemberDetailData) {
  const navigation = useNavigation<NavigationProp>();

  const handleUpdate = () => {
    navigation.navigate(STACK_NAME.PROFILE_UPDATE, { email });
  };

  return (
    <S.Container>
      <S.MemberInfoContainer>
        <S.FollowInfo>
          <S.FollowCount>{followerCount}</S.FollowCount>
          <S.FollowText>팔로워</S.FollowText>
        </S.FollowInfo>
        <UserProfile
          imageUrl={profileImageUrl}
          info={nickname}
          size='lg'
        />
        <S.FollowInfo>
          <S.FollowCount>{followingCount}</S.FollowCount>
          <S.FollowText>팔로잉</S.FollowText>
        </S.FollowInfo>
      </S.MemberInfoContainer>
      {me && (
        <LinkedText
          color='primary'
          onPress={handleUpdate}
        >
          프로필 수정
        </LinkedText>
      )}
    </S.Container>
  );
}
