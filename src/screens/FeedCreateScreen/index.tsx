import { useState } from 'react';

import useCreatePost from '@hooks/post/useCreatePost';

import Button from '@components/_common/atoms/Button';
import ContentInput from '@components/_common/atoms/ContentInput';
import ImageUploader from '@components/ImageUploader';

import { getOnlyHashtags } from '@utils/parseText';

import S from './style';

export default function FeedCreateScreen() {
  const { createPostMutate } = useCreatePost();
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [content, setContent] = useState<string>('');
  const [location, setLocation] = useState<string>('');

  const handlePress = () => {
    createPostMutate.mutate({ content, location, hashtags: getOnlyHashtags(content), imageUrls });
  };

  return (
    <S.Layout>
      <S.FeedCreateContainer>
        <S.ImageWrapper>
          <S.ImageLabel>선택한 이미지</S.ImageLabel>
          <S.ImageForm hasImages={imageUrls.length > 0}>
            <ImageUploader
              images={imageUrls}
              setImages={setImageUrls}
            />
          </S.ImageForm>
        </S.ImageWrapper>

        <S.ContentWrapper>
          <S.ContentLabel>본문</S.ContentLabel>
          <ContentInput
            text={content}
            onChange={setContent}
          />
        </S.ContentWrapper>
      </S.FeedCreateContainer>

      <Button
        size='fillContainer'
        color='primary'
        shape='round'
        onPress={handlePress}
      >
        완료
      </Button>
    </S.Layout>
  );
}
