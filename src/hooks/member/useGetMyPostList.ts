import { useInfiniteQuery } from '@tanstack/react-query';
import QUERY_KEYS from '@constants/queryKeys';
import memberApi from '@api/domain/member';

export default function useGetMyPostList(memberId: string) {
  return useInfiniteQuery({
    queryKey: [QUERY_KEYS.MY_POST_LIST, memberId],
    queryFn: async ({ pageParam = null }) => {
      const data = await memberApi.getMyPostList(memberId, pageParam);
      return data;
    },
    initialPageParam: null,
    getNextPageParam: (lastPage) => (lastPage.hasNext ? lastPage.lastPostId : undefined),
  });
}
