import ImageUploader from '@components/ImageUploader';
import S from './style';
import { useState } from 'react';
import ContentInput from '@components/ContentInput';

export default function FeedCreateScreen() {
  const [images, setImages] = useState<string[]>([]);

  return (
    <S.Layout>
      <S.ImageLabel>선택한 이미지</S.ImageLabel>
      <S.ImageForm hasImages={images.length > 0}>
        <ImageUploader images={images} setImages={setImages} />
      </S.ImageForm>
      <S.ContentWrapper>
        <S.ContentLabel>본문</S.ContentLabel>
        <ContentInput />
      </S.ContentWrapper>
    </S.Layout>
  );
}
