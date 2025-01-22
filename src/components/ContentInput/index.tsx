import React, { useState } from 'react';
import S from './style';
import { Text } from 'react-native';

interface ValueInfo {
  str: string;
  isHashtag: boolean;
  idxArr: number[];
}

const getValueInfos = (value: string): ValueInfo[] => {
  if (value.length === 0) {
    return [];
  }

  const words = value.split(' '); // 공백을 기준으로 나누기
  let index = 0;

  return words.map(word => {
    const idxArr = [index, index + word.length - 1];
    index += word.length + 1;

    return {
      str: word,
      isHashtag: word.startsWith('#'),
      idxArr,
    };
  });
};

export default function ContentInput() {
  const [text, setText] = useState<string>('');

  const valueInfos = getValueInfos(text);

  return (
    <S.ContentInput
      placeholder='내용을 입력하세요...'
      onChangeText={setText}
      multiline={true}
      textAlignVertical='top'
    >
      {valueInfos.map(({ str, isHashtag, idxArr }, index) => {
        const [startIdx, endIdx] = idxArr;
        let content = text.slice(startIdx, endIdx + 1);
        const isLast = index === valueInfos.length - 1;

        return isHashtag ? (
          <S.HashtagText key={index}>
            {content}
            {!isLast && <Text> </Text>}
          </S.HashtagText>
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
