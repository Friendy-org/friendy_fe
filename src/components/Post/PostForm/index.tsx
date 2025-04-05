import ContentInput from '@components/_common/atoms/ContentInput';
import ImageUploader from '@components/ImageUploader';
import Button from '@components/_common/atoms/Button';

import S from './style';

interface PostFormProps {
  imageUrls: string[];
  setImageUrls: (urls: string[]) => void;
  content: string;
  setContent: (content: string) => void;
  onSubmit: () => void;
}

export default function PostForm({ imageUrls, setImageUrls, content, setContent, onSubmit }: PostFormProps) {
  return (
    <S.Layout>
      <S.PostCreateContainer>
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
      </S.PostCreateContainer>

      <Button
        size='fillContainer'
        color='primary'
        shape='round'
        onPress={onSubmit}
      >
        완료
      </Button>
    </S.Layout>
  );
}
