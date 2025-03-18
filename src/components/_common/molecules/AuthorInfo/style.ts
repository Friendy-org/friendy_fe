import styled from '@emotion/native';
import { Theme } from '@emotion/react';

export type AuthorInfoSize = 'x_sm' | 'sm' | 'md' | 'lg';

export interface AuthorInfoStyleProps {
  size: AuthorInfoSize;
}

const nameStyles = (theme: Theme, size: AuthorInfoSize) => {
  const sizes = {
    x_sm: `
      ${theme.font.common.medium};
      color: ${theme.color.gray[900]};
    `,
    sm: `
      ${theme.font.common.regularAccent};
      color: ${theme.color.gray[900]};
    `,
    md: `
      ${theme.font.heading[100]};
      color: ${theme.color.gray[900]};
    `,
    lg: `
      ${theme.font.heading[100]};
      color: ${theme.color.gray[900]};
    `,
  };
  return sizes[size];
};

const contentStyles = (theme: Theme, size: AuthorInfoSize) => {
  const sizes = {
    x_sm: `
      ${theme.font.common.small};
      color: ${theme.color.gray[600]};
    `,
    sm: `
      ${theme.font.common.small};
      color: ${theme.color.gray[900]};
    `,
    md: `
      ${theme.font.common.small};
      color: ${theme.color.gray[900]};
    `,
    lg: `
      ${theme.font.common.regular};
      color: ${theme.color.gray[800]};
    `,
  };
  return sizes[size];
};

const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

const InfoWrapper = styled.View`
  display: flex;
  align-items: flex-start;
  gap: 6px;
`;

const Header = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 5px;
`;

const Name = styled.Text<AuthorInfoStyleProps>(({ size, theme }) => `${nameStyles(theme, size)}`);

const Time = styled.Text`
  ${({ theme }) => theme.font.common.extraSmall};
  ${({ theme }) => theme.color.gray[600]};
`;

const Content = styled.Text<AuthorInfoStyleProps>(({ size, theme }) => `${contentStyles(theme, size)}`);

const S = {
  Container,
  InfoWrapper,
  Header,
  Name,
  Time,
  Content,
};

export default S;
