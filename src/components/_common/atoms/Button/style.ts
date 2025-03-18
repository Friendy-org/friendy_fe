import styled from '@emotion/native';
import { Theme } from '@emotion/react';

export type ButtonSize = 'sm' | 'md' | 'fillContainer';
export type ButtonColor = 'white' | 'primary';
export type ButtonShape = 'default' | 'round';

export interface ButtonStyleProps {
  size: ButtonSize;
  color: ButtonColor;
  shape: ButtonShape;
}

const commonStyles = `
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
`;

const sizeStyles = (size: ButtonSize) => {
  const sizes = {
    sm: `
      padding: 7px 24px;
      min-width: 80px;
    `,
    md: `
      padding: 7px 24px;
      min-width: 207px;
    `,
    fillContainer: `
      width: 100%;
      padding: 20px;
    `,
  };
  return sizes[size];
};

const colorStyles = (theme: Theme, color: ButtonColor) => {
  const colors = {
    white: `
      background-color: ${theme.color.gray[50]};
      border: 1px solid ${theme.color.primary[800]};
    `,
    primary: `
      background-color: ${theme.color.primary[500]};
      border: 1px solid ${theme.color.primary[500]};
    `,
  };
  return colors[color];
};

const textStyles = (theme: Theme, size: ButtonSize, color: ButtonColor) => {
  const textSizes = {
    sm: theme.font.common.smallAccent,
    md: theme.font.common.small,
    fillContainer: theme.font.heading[100],
  };

  const textColors = {
    white: `color: ${theme.color.gray[800]};`,
    primary: `color: ${theme.color.gray[50]};`,
  };

  return `
    ${textSizes[size]}
    ${textColors[color]}
  `;
};

const shapeStyles = {
  default: `border-radius: 8px;`,
  round: `border-radius: 25px;`,
};

const Button = styled.TouchableOpacity<ButtonStyleProps>(
  ({ size, color, shape, theme }) => `
  ${commonStyles}
  ${sizeStyles(size)}
  ${colorStyles(theme, color)}
  ${shapeStyles[shape]}
`,
);

const Text = styled.Text<Omit<ButtonStyleProps, 'shape'>>(({ size, color, theme }) => textStyles(theme, size, color));

const S = {
  Button,
  Text,
};

export default S;
