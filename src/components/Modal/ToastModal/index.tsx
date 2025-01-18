import Toast from '@components/_common/atoms/Toast';
import { useEffect, useState } from 'react';

export function ToastModal({ message }: { message: string }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return <Toast message={message} visible={visible} />;
}
