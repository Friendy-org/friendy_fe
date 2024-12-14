import { ReactNode } from 'react';
import S from './Button.styles';

interface ButtonProps {
  onPress: () => void;
  children: ReactNode;
}

export default function Button({ onPress, children }: ButtonProps) {
  return (
    <S.Button onPress={onPress}>
      <S.ButtonText>{children}</S.ButtonText>
    </S.Button>
  );
}
