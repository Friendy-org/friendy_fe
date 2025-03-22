import styled from '@emotion/native';
import { Theme } from '@emotion/react';

export type AuthorInfoSize = 'sm' | 'md';

export interface AuthorInfoStyleProps {
  size: AuthorInfoSize;
}

const nameStyles = (theme: Theme, size: AuthorInfoSize) => {
  const sizes = {
    sm: `
      ${theme.font.common.medium};
      color: ${theme.color.gray[900]};
    `,
    md: `
      ${theme.font.heading[100]};
      color: ${theme.color.gray[900]};
    `,
  };
  return sizes[size];
};

const contentStyles = (theme: Theme, size: AuthorInfoSize) => {
  const sizes = {
    sm: `
      ${theme.font.common.small};
      color: ${theme.color.gray[600]};
    `,
    md: `
      ${theme.font.common.small};
      color: ${theme.color.gray[900]};
    `,
  };
  return sizes[size];
};

const Container = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

const InfoWrapper = styled.View`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 6px;
`;

const Name = styled.Text<AuthorInfoStyleProps>(({ size, theme }) => `${nameStyles(theme, size)}`);

const Content = styled.Text<AuthorInfoStyleProps>(({ size, theme }) => `${contentStyles(theme, size)}`);

const S = {
  Container,
  InfoWrapper,
  Name,
  Content,
};

export default S;
