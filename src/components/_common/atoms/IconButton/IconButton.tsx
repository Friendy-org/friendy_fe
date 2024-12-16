import { ReactNode } from 'react';
import S from './IconButton.styles';

interface IconButtonProps {
  onPress: () => void;
  children: ReactNode;
}

export default function IconButton({ onPress, children }: IconButtonProps) {
  return <S.IconButton onPress={onPress}>{children}</S.IconButton>;
}
