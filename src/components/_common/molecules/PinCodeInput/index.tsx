import React, { useState, useRef } from 'react';
import { TextInput } from 'react-native';
import S from './style';

interface PinCodeInputProps {
  pinLength: number;
  setAuthCode?: (code: string) => void;
}

export default function PinCodeInput({ pinLength, setAuthCode }: PinCodeInputProps) {
  const [pinValues, setPinValues] = useState<string[]>(Array(pinLength).fill(''));
  const [focusIndex, setFocusIndex] = useState<number | null>(null);
  const inputRefs = useRef<Array<TextInput | null>>(Array(pinLength).fill(null));

  const updatePinValues = (index: number, value: string) => {
    const newPinValues = [...pinValues];
    newPinValues[index] = value;
    setPinValues(newPinValues);
    setAuthCode?.(newPinValues.join(''));
  };

  const handleBackspace = (index: number) => {
    if (index > 0) {
      updatePinValues(index, '');
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (value: string) => {
    const newPinValues = value.slice(0, pinLength).split('').concat(Array(pinLength).fill('')).slice(0, pinLength);
    setPinValues(newPinValues);
    setAuthCode?.(newPinValues.join(''));
  };

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) {
      handlePaste(value);
      return;
    }
    updatePinValues(index, value);
    if (value && index < pinLength - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  return (
    <S.Wrapper>
      {pinValues.map((value, index) => (
        <S.PinInput
          key={`pin-${value + index}`}
          keyboardType='numeric'
          maxLength={1}
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
            if (el) {
              inputRefs.current[index] = el;
            }
          }}
          autoFocus={index === 0}
        />
      ))}
    </S.Wrapper>
  );
}
