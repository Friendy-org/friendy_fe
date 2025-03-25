import { useMutation, useQueryClient } from '@tanstack/react-query';

import QUERY_KEYS from '@constants/queryKeys';
import commentApi from '@api/domain/comment';

export default function useCreateComment(postId: string) {
  const queryClient = useQueryClient();

  const createCommentMutate = useMutation({
    mutationFn: commentApi.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.COMMENT_LIST, postId] });
    },
  });

  return { createCommentMutate };
}
