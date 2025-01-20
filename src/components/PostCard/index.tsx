import React from 'react';
import AuthorInfo from '@components/_common/molecules/AuthorInfo';
import ImageSlider from '@components/_common/molecules/ImageSlider';
import S from './style';
import IconButton from '@components/_common/atoms/IconButton';
import ExpandableText from '@components/_common/atoms/ExpandableText';

interface PostCardProps {
  name: string;
  location: string;
  imageUrls: string[];
  content: string;
  date: string;
  like: string;
  comment: string;
  share: string;
}

export default function PostCard({
  name,
  location,
  imageUrls,
  content,
  date,
  like,
  comment,
  share,
}: PostCardProps) {
  return (
    <S.PostCardContainer>
      <S.PostHeader>
        <AuthorInfo name={name} location={location} />
        <S.ButtonWrapper>
          <IconButton iconName='more-vertical' iconSize={20} />
        </S.ButtonWrapper>
      </S.PostHeader>
      <ImageSlider imageUrls={imageUrls} />
      <S.PostFooter>
        <S.ContentWrapper>
          <ExpandableText content={content} maxLines={1} />
          <S.Date>{date}</S.Date>
        </S.ContentWrapper>
        <S.ButtonWrapper>
          <IconButton iconName='heart' iconSize={26} label={like} />
          <IconButton iconName='message-square' iconSize={26} label={comment} />
          <IconButton iconName='send' iconSize={26} label={share} />
        </S.ButtonWrapper>
      </S.PostFooter>
    </S.PostCardContainer>
  );
}
