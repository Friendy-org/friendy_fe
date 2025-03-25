import React from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import { RouteProp } from '@react-navigation/native';

import { RootStackParamList } from '@customTypes/navigation';
import { CommentItemData } from '@customTypes/comment';

import usePostDetailData from '@hooks/post/usePostDetailData';
import useReplyInput from '@hooks/utils/useReplyInput';

import PostCard from '@components/PostCard';
import MainLayout from '@screens/MainLayout';
import Loading from '@screens/Loading';

import Comment from './Comment';
import CommentInput from './CommentInput';
import S from './style';

interface FeedDetailScreenProps {
  route: RouteProp<RootStackParamList, 'FeedDetail'>;
}

export default function FeedDetailScreen({ route }: FeedDetailScreenProps) {
  const { postId } = route.params;
  const {
    postQuery: { data: postData, isLoading: isPostLoading },
    commentQuery: { isLoading: isCommentLoading, fetchNextPage, hasNextPage, isFetchingNextPage },
    comments,
  } = usePostDetailData(String(postId));

  const { inputRef, inputValue, setInputValue, replyToId, replyToNickname, handleReplyPress, handleCancelReply } =
    useReplyInput();

  if (isPostLoading || isCommentLoading) {
    return <Loading />;
  }

  const renderItem = ({ item }: { item: CommentItemData }) => (
    <S.CommentWrapper>
      <Comment
        {...item}
        onReplyPress={handleReplyPress}
      />
    </S.CommentWrapper>
  );

  return (
    <MainLayout location='Feed'>
      <FlatList
        data={comments}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        ListHeaderComponent={
          <PostCard
            {...postData}
            isExpand
            showComment={false}
          />
        }
        ListFooterComponent={
          isFetchingNextPage ? (
            <ActivityIndicator
              size='small'
              color='#1BD15E'
            />
          ) : null
        }
        onEndReached={() => {
          if (hasNextPage && !isFetchingNextPage) fetchNextPage();
        }}
        onEndReachedThreshold={0.2}
      />

      <CommentInput
        postId={postId}
        inputRef={inputRef}
        replyToId={replyToId ?? undefined}
        replyToNickname={replyToNickname ?? undefined}
        value={inputValue}
        onChangeText={setInputValue}
        placeholder='댓글 달기'
        onCancelReply={handleCancelReply}
      />
    </MainLayout>
  );
}
