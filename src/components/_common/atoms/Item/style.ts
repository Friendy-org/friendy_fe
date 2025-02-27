import styled from '@emotion/native';
import { Theme } from '@emotion/react';

export type ItemColor = 'default' | 'gray' | 'tertiary';
export type ItemAlign = 'left' | 'center';

export interface ItemStyleProps {
  color: ItemColor;
  align: ItemAlign;
}

const colorStyles = (theme: Theme, color: ItemColor) => {
  const colors = {
    default: `
      color: ${theme.color.gray[950]};
    `,
    gray: `
      color: ${theme.color.gray[800]};
    `,
    tertiary: `
      color: ${theme.color.tertiary[400]};
    `,
  };
  return colors[color];
};

const alignStyles = (align: ItemAlign) => `
  align-items: ${align === 'left' ? 'flex-start' : 'center'};
`;

const ItemContainer = styled.TouchableOpacity<{ align: ItemAlign }>`
  display: flex;
  justify-content: center;
  ${({ align }) => alignStyles(align)}

  width: 100%;
  white-space: nowrap;
  padding: 8px 11px;
`;

const Text = styled.Text<{ color: ItemColor }>`
  ${({ theme, color }) => colorStyles(theme, color)}
  ${({ theme }) => theme.font.common.medium}
`;

const S = {
  ItemContainer,
  Text,
};

export default S;
