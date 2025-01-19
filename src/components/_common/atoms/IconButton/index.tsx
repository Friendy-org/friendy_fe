import { ReactNode } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import S from './style';

interface IconButtonProps {
  onPress?: () => void;
  iconName: string;
  iconSize: number;
  color?: string;
  label?: string;
}

export default function IconButton({
  onPress,
  iconName,
  iconSize,
  color = '#000',
  label,
}: IconButtonProps) {
  return (
    <S.IconButtonWrapper onPress={onPress}>
      <Icon name={iconName} size={iconSize} color={color} />
      <S.Label>{label}</S.Label>
    </S.IconButtonWrapper>
  );
}
