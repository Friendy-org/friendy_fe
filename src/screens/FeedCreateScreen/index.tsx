import ImageUploader from '@components/ImageUploader';
import S from './style';
import { useState } from 'react';
import Button from '@components/_common/atoms/Button';
import ContentInput from '@components/_common/atoms/ContentInput';

export default function FeedCreateScreen() {
  const [images, setImages] = useState<string[]>([]);
  const [content, setContent] = useState<string>('');

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
          <ContentInput text={content} onChange={setContent} />
        </S.ContentWrapper>
      </S.FeedCreateContainer>
      <S.ButtonWrapper>
        <Button size='fillContainer' color='primary' shape='round' onPress={handlePress}>
          완료
        </Button>
      </S.ButtonWrapper>
    </S.Layout>
  );
}
