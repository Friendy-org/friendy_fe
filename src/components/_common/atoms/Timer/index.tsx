import { useEffect, useState } from 'react';
import S from './style';

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState(300);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <S.TimerWrapper>
      <S.Timer>{formatTime(timeLeft)}</S.Timer>
    </S.TimerWrapper>
  );
}
