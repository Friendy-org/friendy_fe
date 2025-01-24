import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import S from './style';
import { useState } from 'react';
import Comment from '../Comment';

interface CommentProps {
  profileImageUrl?: string;
  commentId: number;
  authorName: string;
  content: string;
  like: string;
  comment: string;
  reply: number;
}

export default function CommentList({
  profileImageUrl,
  commentId,
  authorName,
  content,
  like,
  comment,
  reply,
}: CommentProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const replies = Array.from({ length: 10 }, (_, index) => ({
    id: index,
    text: `reply ${index + 1}`,
    authorName: '답글다는 사람',
    content: '로제 아님',
    like: '120',
    comment: '32',
  }));

  const handleReply = () => {
    setIsExpanded(true);
    // todo: commentId로 답글 api 호출
  };

  return (
    <S.CommentContainer>
      <Comment
        commentId={commentId}
        authorName={authorName}
        content={content}
        like={like}
        comment={comment}
      />
      {!isExpanded && (
        <S.TextWrapper onPress={handleReply}>
          <S.ReadMoreText>답글 {reply}개 더 보기</S.ReadMoreText>
        </S.TextWrapper>
      )}
      {isExpanded && (
        <>
          <S.Divider />
          <S.ReplyContainer>
            {replies.map(reply => (
              <Comment
                key={reply.id}
                commentId={reply.id}
                authorName={reply.authorName}
                content={reply.content}
                like={reply.like}
                comment={reply.comment}
              />
            ))}
          </S.ReplyContainer>
        </>
      )}
    </S.CommentContainer>
  );
}
