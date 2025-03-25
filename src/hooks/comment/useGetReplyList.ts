import { useInfiniteQuery } from '@tanstack/react-query';
import QUERY_KEYS from '@constants/queryKeys';
import commentApi from '@api/domain/comment';

export default function useGetReplyList(commentId: string, enabled: boolean) {
  return useInfiniteQuery({
    queryKey: [QUERY_KEYS.REPLY_LIST, commentId],
    queryFn: async ({ pageParam = null }) => commentApi.getReplyList(commentId, pageParam),
    initialPageParam: null,
    getNextPageParam: (lastPage) => (lastPage.hasNext ? lastPage.lastReplyId : undefined),
    enabled,
  });
}
