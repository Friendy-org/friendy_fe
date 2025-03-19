import React, { useState, useRef } from 'react';
import { TextInput } from 'react-native';
import S from './style';

interface PinCodeInputProps {
  pinLength: number;
  setAuthCode?: (code: string) => void;
}

export default function PinCodeInput({ pinLength, setAuthCode }: PinCodeInputProps) {
  const [pinValues, setPinValues] = useState(Array(pinLength).fill(''));
  const [focusIndex, setFocusIndex] = useState<number | null>(null);
  const inputRefs = useRef<TextInput[]>([]);

  const updatePinValues = (newValues: string[]) => {
    setPinValues(newValues);
    setAuthCode?.(newValues.join(''));
  };

  const handleBackspace = (index: number) => {
    if (index > 0) {
      const newPinValues = [...pinValues];
      newPinValues[index] = '';
      updatePinValues(newPinValues);

      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (value: string) => {
    const newPinValues = value.split('').slice(0, pinLength);
    while (newPinValues.length < pinLength) {
      newPinValues.push('');
    }
    updatePinValues(newPinValues);
  };

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) {
      handlePaste(value);
      return;
    }

    const newPinValues = [...pinValues];
    newPinValues[index] = value;
    updatePinValues(newPinValues);

    if (value && index < pinLength - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  return (
    <S.Wrapper>
      {pinValues.map((value, index) => (
        <S.PinInput
          key={index}
          keyboardType='numeric'
          maxLength={pinLength}
          value={value}
          hasValue={!!value}
          isFocus={focusIndex === index}
          onFocus={() => setFocusIndex(index)}
          onBlur={() => setFocusIndex(null)}
          onChangeText={(text) => handleChange(index, text)}
          onKeyPress={({ nativeEvent }) => {
            if (nativeEvent.key === 'Backspace') {
              handleBackspace(index);
            }
          }}
          ref={(el) => {
            if (el) inputRefs.current[index] = el;
          }}
          autoFocus={index === 0}
        />
      ))}
    </S.Wrapper>
  );
}
