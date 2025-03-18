import React from 'react';
import { extractHashtags } from 'src/utils/parseText';
import { Text } from 'react-native';

import S from './style';

interface ContentInputProps {
  text: string;
  onChange: (text: string) => void;
}

export default function ContentInput({ text, onChange }: ContentInputProps) {
  const valueInfos = extractHashtags(text);

  return (
    <S.ContentInput
      placeholder='내용을 입력하세요...'
      onChangeText={onChange}
      multiline
      textAlignVertical='top'
    >
      {valueInfos.map(({ id, str, isHashtag }) => (
        <Text key={id}>{isHashtag ? <S.HashtagText>{str}</S.HashtagText> : <S.NormalText>{str}</S.NormalText>}</Text>
      ))}
    </S.ContentInput>
  );
}
