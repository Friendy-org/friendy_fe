import React from 'react';
import Item from '@components/_common/atoms/Item';
import S from './style';
import { ItemColor } from '@components/_common/atoms/Item/style';

interface DropdownItem {
  item: string;
  color: ItemColor;
}

interface DropdownListProps<T extends readonly DropdownItem[]> {
  items: T;
  onItemSelect: (selectedItem: T[number]['item']) => void;
}

export default function DropdownList<T extends readonly DropdownItem[]>({
  items,
  onItemSelect,
}: DropdownListProps<T>) {
  return (
    <S.DropdownList>
      {items.map(({ item, color }, index) => (
        <React.Fragment key={item}>
          <Item item={item} color={color} align='left' onPress={() => onItemSelect(item)} />
          {index < items.length - 1 && <S.Divider />}
        </React.Fragment>
      ))}
    </S.DropdownList>
  );
}
