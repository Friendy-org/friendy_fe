import { ReactNode } from 'react';
import S from './LinkedButton.styles';

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
