import { useNavigation } from '@react-navigation/native';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import postApi from '@api/domain/post';

import { STACK_NAME } from '@constants/navigation';
import QUERY_KEYS from '@constants/queryKeys';

import { NavigationProp } from '@customTypes/navigation';
import { PostFormData } from '@customTypes/post';

export default function useUpdatePost() {
  const navigation = useNavigation<NavigationProp>();
  const queryClient = useQueryClient();

  const updatePostMutate = useMutation({
    mutationFn: ({ postId, updatePostData }: { postId: string; updatePostData: PostFormData }) =>
      postApi.update(postId, updatePostData),
    onSuccess: ({ id }: { id: string }) => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.POST_DETAIL, id] });
      navigation.replace(STACK_NAME.POST_DETAIL, { postId: Number(id) });
    },
  });

  return { updatePostMutate };
}
