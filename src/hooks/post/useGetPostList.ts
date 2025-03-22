import { useInfiniteQuery } from '@tanstack/react-query';
import QUERY_KEYS from '@constants/queryKeys';
import postApi from '@api/domain/post';

export default function useGetPostList() {
  return useInfiniteQuery({
    queryKey: [QUERY_KEYS.POST_LIST],
    queryFn: async ({ pageParam = null }) => {
      const data = await postApi.getList(pageParam);
      return data;
    },
    initialPageParam: null,
    getNextPageParam: (lastPage) => (lastPage.hasNext ? lastPage.lastPostId : undefined),
  });
}
