import { useEffect, useState } from 'react';
import { ToastType, useToastStore } from '@stores/useToastStore';
import IconButton from '@components/_common/molecules/IconButton';
import S from './style';
import Icon from '../Icon';

interface ToastProps {
  id: number;
  message: string;
  type: ToastType;
  visible: boolean;
}

export function Toast({ id, message, type, visible }: ToastProps) {
  const removeToast = useToastStore((state) => state.removeToast);

  let iconName = 'info';
  let iconColor = 'default';

  if (type === 'success') {
    iconName = 'check-circle';
    iconColor = 'primary';
  } else if (type === 'error') {
    iconName = 'x-circle';
    iconColor = 'tertiary';
  }

  return (
    <S.ToastContainer visible={visible}>
      <S.ToastContent>
        <Icon
          name={iconName}
          size='md'
          color={iconColor}
        />
        <S.Text>{message}</S.Text>
      </S.ToastContent>

      <IconButton
        iconName='x'
        size='sm'
        color='gray'
        onPress={() => removeToast(id)}
      />
    </S.ToastContainer>
  );
}

export default function ToastModal({ id, message, type }: Omit<ToastProps, 'visible'>) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Toast
      id={id}
      message={message}
      type={type}
      visible={visible}
    />
  );
}
