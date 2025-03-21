import { useMutation } from '@tanstack/react-query';

import emailApi from '@api/domain/email';
import { SendCodeData } from '@customTypes/email';

export default function useSendCode(nextStep?: () => void) {
  const sendCodeMutate = useMutation({
    mutationFn: async (sendCodeData: SendCodeData) => {
      emailApi.sendCode(sendCodeData);
    },
    onSuccess: () => {
      nextStep?.();
    },
  });

  return {
    sendCodeMutate,
  };
}
