import React from 'react';

import { PostData } from '@customTypes/post';
import { formatRelativeTime } from '@utils/formatDate';

import ImageSlider from '@components/_common/molecules/ImageSlider';
import PostCardHeader from './PostCardHeader';
import PostCardFooter from './PostCardFooter';

import S from './style';

interface PostCardProps extends PostData {
  isExpand?: boolean;
  me: boolean;
}

export default function PostCard({
  id,
  content,
  location,
  createdAt,
  likeCount,
  commentCount,
  shareCount,
  authorResponse,
  imageUrls,
  isExpand = false,
  me,
}: PostCardProps) {
  return (
    <S.PostCardContainer>
      <PostCardHeader
        me={me}
        authorResponse={authorResponse}
        location={location}
      />

      <ImageSlider imageUrls={imageUrls} />

      <PostCardFooter
        id={id}
        content={content}
        createdAt={formatRelativeTime(createdAt)}
        likeCount={likeCount}
        commentCount={commentCount}
        shareCount={shareCount}
        isExpand={isExpand}
      />
    </S.PostCardContainer>
  );
}
