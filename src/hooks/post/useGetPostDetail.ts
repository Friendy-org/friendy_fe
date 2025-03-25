import { useQuery } from '@tanstack/react-query';

import QUERY_KEYS from '@constants/queryKeys';
import postApi from '@api/domain/post';

export default function useGetPostDetail(postId: string) {
  return useQuery({
    queryKey: [QUERY_KEYS.POST_DETAIL, postId],
    queryFn: () => postApi.getDetail(postId),
    enabled: !!postId,
    staleTime: 1000 * 10,
  });
}
