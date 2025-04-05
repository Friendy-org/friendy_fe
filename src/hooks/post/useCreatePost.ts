import { useNavigation } from '@react-navigation/native';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import postApi from '@api/domain/post';

import { STACK_NAME } from '@constants/navigation';
import QUERY_KEYS from '@constants/queryKeys';

import { NavigationProp } from '@customTypes/navigation';

export default function useCreatePost() {
  const navigation = useNavigation<NavigationProp>();
  const queryClient = useQueryClient();

  const createPostMutate = useMutation({
    mutationFn: postApi.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.POST_LIST] });
      navigation.replace(STACK_NAME.POST);
    },
  });

  return { createPostMutate };
}
