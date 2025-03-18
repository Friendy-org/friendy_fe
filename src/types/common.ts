import { NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';

export interface FormRegister {
  value: string;
  error?: string;
  onChange: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  onBlur: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
}
