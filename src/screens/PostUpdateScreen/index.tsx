import { useState } from 'react';

import useUpdatePost from '@hooks/post/useUpdatePost';
import { getOnlyHashtags } from '@utils/parseText';

import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '@customTypes/navigation';
import PostForm from '@components/Post/PostForm';

interface PostUpdateScreenProps {
  route: RouteProp<RootStackParamList, 'PostUpdate'>;
}

export default function PostUpdateScreen({ route }: PostUpdateScreenProps) {
  const { postData } = route.params;

  const { updatePostMutate } = useUpdatePost();
  const [imageUrls, setImageUrls] = useState<string[]>(postData.imageUrls);
  const [content, setContent] = useState<string>(postData.content);
  const [location, setLocation] = useState<string>(postData.location);

  const handleSubmit = () => {
    updatePostMutate.mutate({
      postId: String(postData.id),
      updatePostData: { content, location, hashtags: getOnlyHashtags(content), imageUrls },
    });
  };

  return (
    <PostForm
      imageUrls={imageUrls}
      setImageUrls={setImageUrls}
      content={content}
      setContent={setContent}
      onSubmit={handleSubmit}
    />
  );
}
