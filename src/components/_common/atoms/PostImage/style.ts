import styled from '@emotion/native';

type PostImageSize = 'sm' | 'md' | 'fillContainer';
type PostImageShape = 'default' | 'round';

export interface PostImageStyleProps {
  size: PostImageSize;
  shape: PostImageShape;
}

const sizeStyles = (size: PostImageSize) => {
  const sizes = {
    sm: `
      width: 50px;
      height: 50px;
    `,
    md: `
      width: 150px;
      height: 150px;
    `,
    fillContainer: `
      width: 100%;
      height: 100%;
    `,
  };
  return sizes[size];
};

const shapeStyles = (shape?: PostImageShape) => {
  return shape === 'round' ? `border-radius: 8px;` : '';
};

const PostImage = styled.Image<PostImageStyleProps>(
  ({ size, shape }) => `
  ${sizeStyles(size)}
  ${shapeStyles(shape)}
`
);

const S = {
  PostImage,
};

export default S;
