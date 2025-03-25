import { useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { CommentItemData } from '@customTypes/comment';
import useGetReplyList from '@hooks/comment/useGetReplyList';
import CommentItem from './CommentItem';
import S from './style';

interface CommentProps extends CommentItemData {
  onReplyPress: (id: number, nickname: string) => void;
}

export default function Comment({
  id,
  content,
  createdAt,
  replyCount,
  likeCount,
  authorResponse,
  onReplyPress,
}: CommentProps) {
  const [showReplies, setShowReplies] = useState(false);

  const {
    data: replyData,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useGetReplyList(id.toString(), showReplies);

  const handleToggleReplies = () => {
    setShowReplies((prev) => !prev);
  };

  return (
    <S.Container>
      <CommentItem
        id={id}
        content={content}
        createdAt={createdAt}
        likeCount={likeCount}
        authorResponse={authorResponse}
        onReplyPress={onReplyPress}
      />

      {(replyCount ?? 0) > 0 && (
        <S.More onPress={handleToggleReplies}>
          <S.MoreText>
            {showReplies
              ? `${authorResponse.nickname}에 대한 답글 숨기기`
              : `${authorResponse.nickname}에 대한 답글 ${replyCount}개 보기`}
          </S.MoreText>
        </S.More>
      )}

      {showReplies && (
        <S.Replies>
          {replyData?.pages.map((page) =>
            page.replies.map((reply: CommentItemData) => (
              <CommentItem
                key={reply.id}
                {...reply}
                onReplyPress={onReplyPress}
              />
            )),
          )}
        </S.Replies>
      )}

      {showReplies &&
        (isFetchingNextPage ? (
          <ActivityIndicator
            size='small'
            color='#1BD15E'
          />
        ) : (
          hasNextPage && (
            <S.More onPress={() => fetchNextPage()}>
              <S.MoreText>더보기</S.MoreText>
            </S.More>
          )
        ))}
    </S.Container>
  );
}
