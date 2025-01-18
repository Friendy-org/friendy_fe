import S from './style';

interface ToastProps {
  message: string;
  visible: boolean;
}

export default function Toast({ message, visible }: ToastProps) {
  return (
    <S.ToastContainer isVisible={visible}>
      <S.Message>{message}</S.Message>
    </S.ToastContainer>
  );
}
