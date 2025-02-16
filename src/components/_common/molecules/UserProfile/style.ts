import styled from '@emotion/native';
import { Theme } from '@emotion/react';

export type UserProfileSize = 'md' | 'lg';

export interface UserProfileStyleProps {
  size?: UserProfileSize;
}

const sizeStyles = (theme: Theme, size: UserProfileSize) => {
  const sizes = {
    md: `
      ${theme.font.common.large};
    `,
    lg: `
      ${theme.font.heading[300]};
    `,
  };
  return sizes[size];
};

const UserProfile = styled.View`
  display: flex;
  align-items: center;
  gap: 11px;
`;

const Info = styled.Text<UserProfileStyleProps>`
  ${({ theme, size = 'md' }) => sizeStyles(theme, size)};

  color: ${({ theme }) => theme.color.gray[800]};
`;

const S = {
  UserProfile,
  Info,
};

export default S;
