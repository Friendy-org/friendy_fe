import React from 'react';
import Item from '@components/_common/atoms/Item';
import { ItemColor } from '@components/_common/atoms/Item/style';
import S from './style';

interface ListButtonItem {
  item: string;
  color: ItemColor;
  onPress: () => void;
}

interface ListButtonProps<T extends readonly ListButtonItem[]> {
  items: T;
}

export default function ListButton<T extends readonly ListButtonItem[]>({
  items,
}: ListButtonProps<T>) {
  return (
    <S.ListButton>
      {items.map(({ item, color, onPress }, index) => (
        <React.Fragment key={item}>
          <Item item={item} color={color} align='left' onPress={onPress} />
          {index < items.length - 1 && <S.Divider />}
        </React.Fragment>
      ))}
    </S.ListButton>
  );
}
