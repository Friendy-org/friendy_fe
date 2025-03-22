import { useMutation } from '@tanstack/react-query';

import emailApi from '@api/domain/email';

export default function useVerifyCode(nextStep?: () => void) {
  const verifyCodeMutate = useMutation({
    mutationFn: emailApi.verifyCode,
    onSuccess: () => {
      nextStep?.();
    },
  });

  return {
    verifyCodeMutate,
  };
}
