import Icon from 'react-native-vector-icons/Feather';
import S, { IconButtonStyleProps } from './style';

interface IconButtonProps extends IconButtonStyleProps {
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
  size = 'md',
}: IconButtonProps) {
  return (
    <S.IconButtonWrapper onPress={onPress}>
      <Icon name={iconName} size={iconSize} color={color} />
      {label && (
        <S.Label size={size} color={color}>
          {label}
        </S.Label>
      )}
    </S.IconButtonWrapper>
  );
}
