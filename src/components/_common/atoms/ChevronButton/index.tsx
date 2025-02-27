import React, { ReactNode } from 'react';
import S from './style';
import Icon from '../Icon';

interface ChevronButtonProps {
  onPress: () => void;
  children: ReactNode;
}

export default function ChevronButton({ onPress, children }: ChevronButtonProps) {
  return (
    <S.Container onPress={onPress}>
      <S.Text>{children}</S.Text>
      <Icon name='chevron-right' size='sm' color='gray' />
    </S.Container>
  );
}
