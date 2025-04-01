import { useState } from 'react';

import useUpdatePost from '@hooks/post/useUpdatePost';

import Button from '@components/_common/atoms/Button';
import ContentInput from '@components/_common/atoms/ContentInput';
import ImageUploader from '@components/ImageUploader';

import { getOnlyHashtags } from '@utils/parseText';

import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '@customTypes/navigation';

import S from './style';

interface FeedUpdateScreenProps {
  route: RouteProp<RootStackParamList, 'FeedUpdate'>;
}

export default function FeedUpdateScreen({ route }: FeedUpdateScreenProps) {
  const { postData } = route.params;

  const { updatePostMutate } = useUpdatePost();
  const [imageUrls, setImageUrls] = useState<string[]>(postData.imageUrls);
  const [content, setContent] = useState<string>(postData.content);
  const [location, setLocation] = useState<string>(postData.location);

  const handlePress = () => {
    updatePostMutate.mutate({
      postId: String(postData.id),
      editPostData: { content, location, hashtags: getOnlyHashtags(content), imageUrls },
    });
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
