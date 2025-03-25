import React, { useRef, useImperativeHandle } from 'react';
import { TextInput } from 'react-native';

import IconButton from '@components/_common/molecules/IconButton';
import useCreateComment from '@hooks/comment/useCreateComment';
import useCreateReply from '@hooks/comment/useCreateReply';
import S from './style';

interface CommentInputProps {
  postId: number;
  replyToId?: number;
  replyToNickname?: string;
  value: string;
  onChangeText: (text: string) => void;
  onCancelReply?: () => void;
  placeholder?: string;
  inputRef?: React.Ref<TextInput>;
}

export default function CommentInput({
  postId,
  replyToId,
  replyToNickname,
  value,
  onChangeText,
  onCancelReply,
  placeholder = '댓글을 입력하세요',
  inputRef,
}: CommentInputProps) {
  const internalRef = useRef<TextInput>(null);
  const { createCommentMutate } = useCreateComment(String(postId));
  const { createReplyMutate } = useCreateReply(String(postId));

  useImperativeHandle(inputRef, () => internalRef.current as TextInput);

  const handleSend = () => {
    if (replyToId) {
      createReplyMutate.mutate({ commentId: replyToId, postId, content: value });
      return;
    }
    createCommentMutate.mutate({ postId, content: value });
  };

  return (
    <S.Container>
      {replyToId && (
        <S.ReplyBanner>
          <S.ReplyText>{`${replyToNickname}님에게 답장하는 중`}</S.ReplyText>
          <IconButton
            iconName='x'
            size='sm'
            color='default'
            onPress={onCancelReply}
          />
        </S.ReplyBanner>
      )}

      <S.InputWrapper>
        <S.InputField
          ref={internalRef}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
        />
        <IconButton
          iconName='send'
          size='md'
          color='default'
          onPress={handleSend}
        />
      </S.InputWrapper>
    </S.Container>
  );
}
