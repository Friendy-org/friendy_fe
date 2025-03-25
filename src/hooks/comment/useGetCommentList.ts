import { useInfiniteQuery } from '@tanstack/react-query';
import QUERY_KEYS from '@constants/queryKeys';
import commentApi from '@api/domain/comment';

export default function useGetCommentList(postId: string) {
  return useInfiniteQuery({
    queryKey: [QUERY_KEYS.COMMENT_LIST, postId],
    queryFn: async ({ pageParam = null }) => commentApi.getList(postId, pageParam),
    initialPageParam: null,
    getNextPageParam: (lastPage) => (lastPage.hasNext ? lastPage.lastCommentId : undefined),
  });
}
