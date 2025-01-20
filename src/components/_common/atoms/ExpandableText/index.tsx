import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import S from './style';

interface ExpandableTextProps {
  content: string;
  maxLines: number;
}

export default function ExpandableText({ content, maxLines }: ExpandableTextProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <S.TextWrapper>
      <S.Content numberOfLines={isExpanded ? undefined : maxLines} ellipsizeMode='clip'>
        {content}
      </S.Content>
      {!isExpanded && (
        <TouchableOpacity onPress={() => setIsExpanded(true)}>
          <S.ReadMoreText>...더보기</S.ReadMoreText>
        </TouchableOpacity>
      )}
    </S.TextWrapper>
  );
}
