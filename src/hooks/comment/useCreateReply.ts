import { useMutation, useQueryClient } from '@tanstack/react-query';

import QUERY_KEYS from '@constants/queryKeys';
import commentApi from '@api/domain/comment';

export default function useCreateReply(commentId: string) {
  const queryClient = useQueryClient();

  const createReplyMutate = useMutation({
    mutationFn: commentApi.createReply,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.COMMENT_LIST, commentId] });
    },
  });

  return { createReplyMutate };
}
