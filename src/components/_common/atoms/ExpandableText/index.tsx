import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import S from './style';

interface ExpandableTextProps {
  onPress?: () => void;
  isExpand: boolean;
  content: string;
  maxLines: number;
}

export default function ExpandableText({ onPress, isExpand, content, maxLines }: ExpandableTextProps) {
  const [isExpanded, setIsExpanded] = useState(isExpand);

  return (
    <S.TextWrapper onPress={isExpanded ? onPress : () => setIsExpanded(true)}>
      <S.Content
        numberOfLines={isExpanded ? undefined : maxLines}
        ellipsizeMode='clip'
      >
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
