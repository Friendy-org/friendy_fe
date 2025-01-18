import emailApis from '@api/domain/email';
import { useToast } from '@contexts/ToastContext';
import { useMutation } from '@tanstack/react-query';

export default function useEmail() {
  const { error } = useToast();

  const sendCodeMutate = useMutation({
    mutationFn: ({ email }: { email: string }) =>
      emailApis.sendCode({
        email,
      }),
    onSuccess: () => {
      console.log('인증코드 전송 성공');
    },
    onError: err => {
      console.log(err);
      error(err.message);
    },
  });

  const verifyCodeMutate = useMutation({
    mutationFn: ({ email, authCode }: { email: string; authCode: string }) =>
      emailApis.verifyCode({
        email,
        authCode,
      }),
    onSuccess: () => {
      console.log('인증코드 검증 성공');
    },
  });

  return { sendCodeMutate, verifyCodeMutate };
}
