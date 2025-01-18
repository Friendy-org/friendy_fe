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

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) {
      handlePaste(value);
      return;
    }

    const newPinValues = [...pinValues];
    newPinValues[index] = value;
    setPinValues(newPinValues);

    if (setAuthCode) {
      setAuthCode(newPinValues.join(''));
    }

    if (value && index < pinLength - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleBackspace = (index: number, value: string) => {
    if (value === '' && index > 0) {
      const newPinValues = [...pinValues];
      newPinValues[index] = '';
      setPinValues(newPinValues);

      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (value: string) => {
    const newPinValues = value.split('').slice(0, pinLength);
    while (newPinValues.length < pinLength) {
      newPinValues.push('');
    }
    setPinValues(newPinValues);
    setAuthCode?.(newPinValues.join(''));
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
          onChangeText={text => handleChange(index, text)}
          onKeyPress={({ nativeEvent }) => {
            if (nativeEvent.key === 'Backspace') {
              handleBackspace(index, value);
            }
          }}
          ref={el => {
            if (el) inputRefs.current[index] = el;
          }}
          autoFocus={index === 0}
        />
      ))}
    </S.Wrapper>
  );
}
