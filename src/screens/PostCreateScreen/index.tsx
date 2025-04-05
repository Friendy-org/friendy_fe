import { useState } from 'react';

import useCreatePost from '@hooks/post/useCreatePost';
import { getOnlyHashtags } from '@utils/parseText';
import PostForm from '@components/Post/PostForm';

export default function PostCreateScreen() {
  const { createPostMutate } = useCreatePost();
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [content, setContent] = useState<string>('');
  const [location, setLocation] = useState<string>('');

  const handleSubmit = () => {
    createPostMutate.mutate({ content, location, hashtags: getOnlyHashtags(content), imageUrls });
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
