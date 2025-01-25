import styled from '@emotion/native';

export type IconButtonSize = 'sm' | 'md';

export interface IconButtonStyleProps {
  size?: IconButtonSize;
}

const sizeStyles = {
  sm: `
    font-size: 9px;
  `,
  md: `
    font-size: 12px;
  `,
};

const Label = styled.Text<IconButtonStyleProps & { color?: string }>`
  color: ${({ color }) => color || '#000000'};
  margin-top: 4px;
  ${({ size }) => (size ? sizeStyles[size] : sizeStyles['md'])};
`;

const IconButtonWrapper = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

const S = {
  IconButtonWrapper,
  Label,
};

export default S;
