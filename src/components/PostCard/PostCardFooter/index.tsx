import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { NavigationProp } from '@customTypes/navigation';

import { STACK_NAME } from '@constants/navigation';

import ExpandableText from '@components/_common/atoms/ExpandableText';
import IconButton from '@components/_common/molecules/IconButton';

import S from './style';

interface PostCardFooter {
  id: number;
  content: string;
  createdAt: string;
  likeCount: number;
  commentCount: number;
  shareCount: number;
  isExpand?: boolean;
}

export default function PostCardFooter({
  id,
  content,
  createdAt,
  likeCount,
  commentCount,
  shareCount,
  isExpand = false,
}: PostCardFooter) {
  const navigation = useNavigation<NavigationProp>();

  const handleNavigateToDetail = () => {
    if (!isExpand) {
      navigation.navigate(STACK_NAME.FEED_DETAIL, { postId: id });
    }
  };

  return (
    <S.Container>
      <S.ContentWrapper>
        <ExpandableText
          onPress={handleNavigateToDetail}
          isExpand={isExpand}
          content={content}
          maxLines={1}
        />

        <S.Date>{createdAt}</S.Date>
      </S.ContentWrapper>

      <S.ButtonWrapper>
        <IconButton
          iconName='heart'
          size='md'
          color='default'
          label={String(likeCount)}
        />
        {(commentCount ?? null) !== null && (
          <IconButton
            onPress={handleNavigateToDetail}
            iconName='message-square'
            size='md'
            color='default'
            label={String(commentCount)}
          />
        )}
        <IconButton
          iconName='send'
          size='md'
          color='default'
          label={String(shareCount)}
        />
      </S.ButtonWrapper>
    </S.Container>
  );
}
