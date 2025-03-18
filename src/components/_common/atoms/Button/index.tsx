import { ReactNode } from 'react';
import S, { ButtonStyleProps } from './style';

interface ButtonProps extends ButtonStyleProps {
  onPress: () => void;
  children: ReactNode;
}

export default function Button({
  onPress,
  children,
  size = 'fillContainer',
  color = 'primary',
  shape = 'default',
}: ButtonProps) {
  return (
    <S.Button
      size={size}
      color={color}
      shape={shape}
      onPress={onPress}
    >
      <S.Text
        size={size}
        color={color}
      >
        {children}
      </S.Text>
    </S.Button>
  );
}
