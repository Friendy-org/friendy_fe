import IconButton from '@components/_common/atoms/IconButton';
import AuthorInfo from '@components/_common/molecules/AuthorInfo';
import S from './style';

interface CommentProps {
  profileImageUrl?: string;
  commentId: number;
  authorName: string;
  content: string;
  like: string;
  comment: string;
}

export default function Comment({
  profileImageUrl,
  commentId,
  authorName,
  content,
  like,
  comment,
}: CommentProps) {
  return (
    <S.CommentWrapper>
      <AuthorInfo profileImageUrl={profileImageUrl} name={authorName} content={content} />
      <S.ButtonWrapper>
        <IconButton iconName='heart' iconSize={18} label={like} />
        <IconButton iconName='message-square' iconSize={18} label={comment} />
      </S.ButtonWrapper>
    </S.CommentWrapper>
  );
}
