import { useRef, useState } from 'react';
import { TextInput } from 'react-native';

export default function useReplyInput() {
  const inputRef = useRef<TextInput>(null);
  const [inputValue, setInputValue] = useState('');
  const [replyToId, setReplyToId] = useState<number | null>(null);
  const [replyToNickname, setReplyToNickname] = useState<string | null>(null);

  const handleReplyPress = (id: number, nickname: string) => {
    setReplyToId(id);
    setReplyToNickname(nickname);
    setInputValue(`@${nickname} `);
    inputRef.current?.focus();
  };

  const handleCancelReply = () => {
    setReplyToId(null);
    setReplyToNickname(null);
    setInputValue('');
  };

  return {
    inputRef,
    inputValue,
    setInputValue,
    replyToId,
    replyToNickname,
    handleReplyPress,
    handleCancelReply,
  };
}
