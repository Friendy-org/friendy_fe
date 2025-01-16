import Dot from '@components/_common/atoms/Dot';
import S from './style';

interface DotIndicatorProps {
  totalStep: number;
  step: number;
}

export default function DotIndicator({ totalStep, step }: DotIndicatorProps) {
  return (
    <S.Wrapper>
      {Array.from({ length: totalStep }).map((_, index) => (
        <Dot key={index} isActive={index === step} isLast={index === totalStep - 1} />
      ))}
    </S.Wrapper>
  );
}
