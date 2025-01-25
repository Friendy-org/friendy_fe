import React from 'react';
import AuthorInfo from '@components/_common/molecules/AuthorInfo';
import ImageSlider from '@components/_common/molecules/ImageSlider';
import S from './style';
import IconButton from '@components/_common/atoms/IconButton';
import ExpandableText from '@components/_common/atoms/ExpandableText';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'src/types/NavigationTypes';
import { useNavigation } from '@react-navigation/native';

interface PostCardProps {
  profileImageUrl?: string;
  postId: number;
  name: string;
  location: string;
  imageUrls: string[];
  content: string;
  date: string;
  like: string;
  comment: string;
  share: string;
  isExpand?: boolean;
  commentIcon?: boolean;
}

type NavigationProp = StackNavigationProp<RootStackParamList>;

export default function PostCard({
  profileImageUrl,
  postId,
  name,
  location,
  imageUrls,
  content,
  date,
  like,
  comment,
  share,
  isExpand = false,
  commentIcon = true,
}: PostCardProps) {
  const navigation = useNavigation<NavigationProp>();

  const handleNavigateToDetail = () => {
    if (!isExpand) {
      navigation.navigate('FeedDetail', {
        postId: postId,
      });
    }
  };

  return (
    <S.PostCardContainer>
      <S.PostHeader>
        <AuthorInfo size='md' profileImageUrl={profileImageUrl} name={name} content={location} />
        <S.ButtonWrapper>
          <IconButton iconName='more-vertical' iconSize={20} />
        </S.ButtonWrapper>
      </S.PostHeader>
      <ImageSlider imageUrls={imageUrls} />
      <S.PostFooter>
        <S.ContentWrapper>
          <ExpandableText
            onPress={handleNavigateToDetail}
            isExpand={isExpand}
            content={content}
            maxLines={1}
          />
          <S.Date>{date}</S.Date>
        </S.ContentWrapper>
        <S.ButtonWrapper>
          <IconButton iconName='heart' iconSize={26} label={like} />
          {commentIcon && (
            <IconButton
              onPress={handleNavigateToDetail}
              iconName='message-square'
              iconSize={26}
              label={comment}
            />
          )}
          <IconButton iconName='send' iconSize={26} label={share} />
        </S.ButtonWrapper>
      </S.PostFooter>
    </S.PostCardContainer>
  );
}
