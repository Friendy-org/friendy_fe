import { useMutation } from '@tanstack/react-query';

import emailApi from '@api/domain/email';

export default function useSendCode(nextStep?: () => void) {
  const sendCodeMutate = useMutation({
    mutationFn: emailApi.sendCode,
    onSuccess: () => {
      nextStep?.();
    },
  });

  return {
    sendCodeMutate,
  };
}
