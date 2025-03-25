import React from 'react';
import { TouchableOpacity } from 'react-native';
import IconButton from '@components/_common/molecules/IconButton';
import ProfileImage from '@components/_common/atoms/ProfileImage';
import { CommentItemData } from '@customTypes/comment';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@customTypes/navigation';
import { STACK_NAME } from '@constants/navigation';
import S from './style';

interface CommentItemProps extends CommentItemData {
  onReplyPress: (id: number, nickname: string) => void;
}

export default function CommentItem({
  id,
  content,
  createdAt,
  likeCount,
  authorResponse,
  onReplyPress,
}: CommentItemProps) {
  const navigation = useNavigation<NavigationProp>();

  const handleProfile = () => {
    navigation.navigate(STACK_NAME.PROFILE, { memberId: authorResponse.id });
  };

  return (
    <S.CommentWrapper>
      <S.Author>
        <ProfileImage
          size='sm'
          imageUrl={authorResponse.profileImageUrl}
          onPress={handleProfile}
        />
        <S.InfoWrapper>
          <S.InfoHeader>
            <S.Name>{authorResponse.nickname}</S.Name>
            <S.Time>{createdAt}</S.Time>
          </S.InfoHeader>
          <S.Content>{content}</S.Content>
          <TouchableOpacity onPress={() => onReplyPress(id, authorResponse.nickname)}>
            <S.ReplyText>답글 달기</S.ReplyText>
          </TouchableOpacity>
        </S.InfoWrapper>
      </S.Author>

      <IconButton
        iconName='heart'
        label={String(likeCount)}
        size='sm'
        color='default'
      />
    </S.CommentWrapper>
  );
}
