import S, { PostImageStyleProps } from './style';

interface PostImageProps extends PostImageStyleProps {
  imageUrl: string;
}

export default function PostImage({ size = 'md', shape = 'default', imageUrl }: PostImageProps) {
  return (
    <S.PostImage
      size={size}
      shape={shape}
      source={{
        uri: imageUrl,
      }}
      resizeMode='cover'
    />
  );
}
