import React from 'react';
import S from './style';

interface SegmentedControlProps<T extends readonly string[]> {
  options: T;
  selectedValue: T[number];
  onPress: (selectedValue: T[number]) => void;
}

export default function SegmentedControl<T extends readonly string[]>({
  options,
  selectedValue,
  onPress,
}: SegmentedControlProps<T>) {
  return (
    <S.Container>
      {options.map(option => (
        <S.SegmentButton key={option} onPress={() => onPress(option)}>
          {selectedValue === option && <S.SelectButton />}
          <S.SegmentText isSelected={selectedValue === option}>{option}</S.SegmentText>
        </S.SegmentButton>
      ))}
    </S.Container>
  );
}
