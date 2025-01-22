import ImageUploader from '@components/ImageUploader';
import S from './style';
import { useState } from 'react';
import ContentInput from '@components/ContentInput';
import Button from '@components/_common/atoms/Button';

export default function FeedCreateScreen() {
  const [images, setImages] = useState<string[]>([]);

  const handlePress = () => {};

  return (
    <S.Layout>
      <S.FeedCreateContainer>
        <S.ImageLabel>선택한 이미지</S.ImageLabel>
        <S.ImageForm hasImages={images.length > 0}>
          <ImageUploader images={images} setImages={setImages} />
        </S.ImageForm>
        <S.ContentWrapper>
          <S.ContentLabel>본문</S.ContentLabel>
          <ContentInput />
        </S.ContentWrapper>
      </S.FeedCreateContainer>
      <S.ButtonWrapper>
        <Button onPress={handlePress}>완료</Button>
      </S.ButtonWrapper>
    </S.Layout>
  );
}
