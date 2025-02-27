import styled from '@emotion/native';

type ProfileImageSize = 'x_sm' | 'sm' | 'md' | 'lg';

export interface ProfileImageStyleProps {
  size: ProfileImageSize;
}

const sizeStyles = (size: ProfileImageSize) => {
  const sizes = {
    x_sm: `
      width: 32px;
      height: 32px;
      border-radius: 16px;
    `,
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
    lg: `
      width: 114px;
      height: 114px;
      border-radius: 57px;
    `,
  };
  return sizes[size];
};

const ProfileImage = styled.Image<ProfileImageStyleProps>(({ size }) => `${sizeStyles(size)}`);

const S = {
  ProfileImage,
};

export default S;
