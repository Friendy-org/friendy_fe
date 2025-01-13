import { useMutation } from '@tanstack/react-query';
import sendEmail from '../api/domain/email';

export default function useEmail() {
  const sendEmailMutate = useMutation({
    mutationFn: ({ email }: { email: string }) =>
      sendEmail({
        email,
      }),
    onSuccess: () => {
      console.log('인증코드 전송 성공');
    },
  });

  return { sendEmailMutate };
}
