import React from 'react';
import Item from '@components/_common/atoms/Item';
import S from './style';
import { ItemColor } from '@components/_common/atoms/Item/style';

interface DropdownItem {
  item: string;
  color: ItemColor;
}

interface ItemListProps<T extends readonly DropdownItem[]> {
  items: T;
  onItemSelect: (selectedItem: T[number]['item']) => void;
}

export default function ItemList<T extends readonly DropdownItem[]>({
  items,
  onItemSelect,
}: ItemListProps<T>) {
  return (
    <S.ItemList>
      {items.map(({ item, color }, index) => (
        <React.Fragment key={item}>
          <Item item={item} color={color} align='left' onPress={() => onItemSelect(item)} />
          {index < items.length - 1 && <S.Divider />}
        </React.Fragment>
      ))}
    </S.ItemList>
  );
}
