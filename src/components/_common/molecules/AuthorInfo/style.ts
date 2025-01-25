import styled from '@emotion/native';

export type AuthorInfoSize = 'sm' | 'md';

export interface AuthorInfoStyleProps {
  size: AuthorInfoSize;
}

const sizeStyles = {
  sm: `
    width: 40px;
    height: 40px;
    border-radius: 20px;
  `,
  md: `
    width: 44px;
    height: 44px;
    border-radius: 22px;
  `,
};

const textSizeStyles = {
  sm: `
    font-size: 12px;
  `,
  md: `
    font-size: 16px;
  `,
};

const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

const ProfileImage = styled.Image<AuthorInfoStyleProps>`
  background-color: #d9d9d9;
  ${({ size }) => sizeStyles[size]}
`;

const InfoWrapper = styled.View`
  margin-left: 12px;
`;

const Name = styled.Text<AuthorInfoStyleProps>`
  font-weight: bold;
  color: #000;
  margin-bottom: 2px;
  ${({ size }) => textSizeStyles[size]}
`;

const Content = styled.Text`
  font-size: 10px;
  color: #000;
`;

const S = {
  Container,
  ProfileImage,
  InfoWrapper,
  Name,
  Content,
};

export default S;
