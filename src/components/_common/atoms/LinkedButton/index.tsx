import { ReactNode } from 'react';
import S from './style';

interface LinkedButtonProps {
  onPress: () => void;
  children: ReactNode;
}

export default function LinkedButton({ onPress, children }: LinkedButtonProps) {
  return (
    <S.LinkedWrapper onPress={onPress}>
      <S.LinkedText>{children}</S.LinkedText>
    </S.LinkedWrapper>
  );
}
