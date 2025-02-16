import React, { useState } from 'react';
import S from './style';
import { extractHashtags } from 'src/utils/parseText';
import { Text } from 'react-native';

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
      multiline={true}
      textAlignVertical='top'
    >
      {valueInfos.map(({ str, isHashtag, idxArr }, index) => {
        const [startIdx, endIdx] = idxArr;
        let content = text.slice(startIdx, endIdx + 1);
        const isLast = index === valueInfos.length - 1;

        return isHashtag ? (
          <Text key={index}>
            <S.HashtagText>{content}</S.HashtagText>
            {!isLast && <Text> </Text>}
          </Text>
        ) : (
          <S.NormalText key={index}>
            {content}
            {!isLast && <Text> </Text>}
          </S.NormalText>
        );
      })}
    </S.ContentInput>
  );
}
