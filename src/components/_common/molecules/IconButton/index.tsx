import Icon from '@components/_common/atoms/Icon';
import S, { IconButtonStyleProps } from './style';

interface IconButtonProps extends IconButtonStyleProps {
  onPress?: () => void;
  iconName: string;
  label?: string;
}

export default function IconButton({
  label,
  iconName,
  size = 'md',
  color = 'default',
  onPress,
}: IconButtonProps) {
  return (
    <S.IconButtonWrapper size={size} onPress={onPress}>
      <Icon name={iconName} size={size} color={color} />
      {label && (
        <S.Label size={size} color={color}>
          {label}
        </S.Label>
      )}
    </S.IconButtonWrapper>
  );
}
