import styled from '@emotion/native';
import { Theme } from '@emotion/react';

export type LinkedTextColor = 'primary' | 'secondary';

export interface LinkedTextStyleProps {
  color: LinkedTextColor;
  isUnderlined?: boolean;
}

const colorStyles = (theme: Theme, color: LinkedTextColor) => {
  const colors = {
    primary: `
      color: ${theme.color.primary[800]};
      text-decoration-color: ${theme.color.primary[800]};
    `,
    secondary: `
      color: ${theme.color.secondary[600]};
      text-decoration-color: ${theme.color.secondary[600]};
    `,
  };
  return colors[color];
};

const LinkedWrapper = styled.TouchableOpacity``;

const LinkedText = styled.Text<LinkedTextStyleProps>`
  ${({ theme, color }) => colorStyles(theme, color)};

  text-decoration-line: ${({ isUnderlined }) => (isUnderlined ? 'underline' : 'none')};
`;

const S = {
  LinkedWrapper,
  LinkedText,
};

export default S;
