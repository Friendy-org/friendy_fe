import { useQuery } from '@tanstack/react-query';

import QUERY_KEYS from '@constants/queryKeys';
import memberApi from '@api/domain/member';

export default function useGetMemberInfo(memberId: string) {
  return useQuery({
    queryKey: [QUERY_KEYS.MEMBER_INFO, memberId],
    queryFn: () => memberApi.getInfo(memberId),
    enabled: !!memberId,
    staleTime: 1000 * 10,
  });
}
