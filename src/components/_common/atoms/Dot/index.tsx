import S from './style';

interface DotProps {
  isActive: boolean;
}

export default function Dot({ isActive }: DotProps) {
  return <S.Dot isActive={isActive}></S.Dot>;
}
