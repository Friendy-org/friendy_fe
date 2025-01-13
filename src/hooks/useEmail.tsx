import { useMutation } from '@tanstack/react-query';
import emailApis from '../api/domain/email';

export default function useEmail() {
  const sendCodeMutate = useMutation({
    mutationFn: ({ email }: { email: string }) =>
      emailApis.sendCode({
        email,
      }),
    onSuccess: () => {
      console.log('인증코드 전송 성공');
    },
  });

  return { sendCodeMutate };
}
