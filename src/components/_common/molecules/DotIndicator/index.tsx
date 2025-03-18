import Dot from '@components/_common/atoms/Dot';
import S from './style';

interface DotIndicatorProps {
  totalStep: number;
  step: number;
}

export default function DotIndicator({ totalStep, step }: DotIndicatorProps) {
  const steps = Array.from({ length: totalStep }).map((_, index) => ({
    id: `dot-${index}`,
  }));

  return (
    <S.Wrapper>
      {steps.map((dot) => (
        <Dot
          key={dot.id}
          isActive={dot.id === `dot-${step}`}
        />
      ))}
    </S.Wrapper>
  );
}
