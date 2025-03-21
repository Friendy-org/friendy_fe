import { useMutation } from '@tanstack/react-query';

import emailApi from '@api/domain/email';
import { VerifyCodeData } from '@customTypes/email';

export default function useVerifyCode(nextStep?: () => void) {
  const verifyCodeMutate = useMutation({
    mutationFn: async (verifyCodeData: VerifyCodeData) => {
      emailApi.verifyCode(verifyCodeData);
    },
    onSuccess: () => {
      nextStep?.();
    },
  });

  return {
    verifyCodeMutate,
  };
}
