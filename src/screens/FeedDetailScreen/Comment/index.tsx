import { useState } from 'react';

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
  replyCount = 0,
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
    isLoading,
  } = useGetReplyList(id.toString(), showReplies);

  const handleToggleReplies = () => {
    if (!showReplies) {
      setShowReplies(true);
      return;
    }

    if (hasNextPage) {
      fetchNextPage();
      return;
    }

    setShowReplies(false);
  };

  const getMoreButtonText = () => {
    if (isLoading || isFetchingNextPage) return '읽어들이는 중...';
    if (!showReplies) return `${authorResponse.nickname}에 대한 답글 ${replyCount}개 보기`;
    if (hasNextPage) return `${authorResponse.nickname}에 대한 답글 ${replyData?.pages?.[0].replyCount}개 보기`;
    return '답글 숨기기';
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

      {showReplies && !isLoading && (
        <S.Replies>
          {replyData?.pages.flatMap((page) =>
            page.comments?.map((reply: CommentItemData) => (
              <CommentItem
                key={reply.id}
                {...reply}
                onReplyPress={onReplyPress}
              />
            )),
          )}
        </S.Replies>
      )}

      {replyCount > 0 && (
        <S.More onPress={handleToggleReplies}>
          <S.MoreText>{getMoreButtonText()}</S.MoreText>
        </S.More>
      )}
    </S.Container>
  );
}
