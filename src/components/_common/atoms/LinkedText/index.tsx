import { ReactNode } from 'react';
import S, { LinkedTextStyleProps } from './style';

interface LinkedTextProps extends LinkedTextStyleProps {
  onPress?: () => void;
  children: ReactNode;
}

export default function LinkedText({ color = 'primary', isUnderlined, onPress, children }: LinkedTextProps) {
  return (
    <S.LinkedWrapper onPress={onPress}>
      <S.LinkedText
        color={color}
        isUnderlined={isUnderlined}
      >
        {children}
      </S.LinkedText>
    </S.LinkedWrapper>
  );
}
