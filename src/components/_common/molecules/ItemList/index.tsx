import React from 'react';
import Item from '@components/_common/atoms/Item';
import { ItemAlign, ItemColor } from '@components/_common/atoms/Item/style';

import S from './style';

interface DropdownItem {
  item: string;
  color: ItemColor;
  align: ItemAlign;
}

interface ItemListProps<T extends readonly DropdownItem[]> {
  items: T;
  onItemSelect: (selectedItem: T[number]['item']) => void;
}

export default function ItemList<T extends readonly DropdownItem[]>({ items, onItemSelect }: ItemListProps<T>) {
  return (
    <S.ItemList>
      {items.map(({ item, color, align }, index) => (
        <React.Fragment key={item}>
          <Item
            item={item}
            color={color}
            align={align}
            onPress={() => onItemSelect(item)}
          />
          {index < items.length - 1 && <S.Divider />}
        </React.Fragment>
      ))}
    </S.ItemList>
  );
}
