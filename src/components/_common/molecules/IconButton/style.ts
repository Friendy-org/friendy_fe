import styled from '@emotion/native';
import { Theme } from '@emotion/react';

export type IconButtonSize = 'sm' | 'md' | 'fillContainer';
export type IconButtonColor = 'default' | 'gray';

export interface IconButtonStyleProps {
  size: IconButtonSize;
  color: IconButtonColor;
}

const textStyles = (theme: Theme, size: IconButtonSize) => {
  const sizes = {
    sm: `
      ${theme.font.common.extraSmall};
    `,
    md: `
      ${theme.font.common.small};
    `,
    fillContainer: `
      ${theme.font.common.small};
    `,
  };
  return sizes[size];
};

const colorStyles = (theme: Theme, color: IconButtonColor) => {
  const colors = {
    default: `
      color: ${theme.color.gray[900]};
    `,
    gray: `
      color: ${theme.color.gray[500]};
    `,
  };
  return colors[color];
};

const Label = styled.Text<IconButtonStyleProps>(
  ({ size, color, theme }) => `
  ${textStyles(theme, size)}
  ${colorStyles(theme, color)}
`
);

const IconButtonWrapper = styled.TouchableOpacity<{ size: IconButtonSize }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  ${({ size }) => (size === 'fillContainer' ? 'flex: 1;' : '')};
`;

const S = {
  IconButtonWrapper,
  Label,
};

export default S;
