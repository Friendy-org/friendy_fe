import S, { ItemStyleProps } from './style';

interface ItemProps extends ItemStyleProps {
  item: string;
  onPress: () => void;
}

export default function Item({ item, color = 'default', align = 'center', onPress }: ItemProps) {
  return (
    <S.ItemContainer
      align={align}
      onPress={onPress}
    >
      <S.Text color={color}>{item}</S.Text>
    </S.ItemContainer>
  );
}
