import { useState } from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { format } from 'date-fns';
import S from './style';

interface DateInputFieldProps {
  selectedDate: Date;
  onChangeDate: (date: Date) => void;
}

export default function DateInputField({ selectedDate, onChangeDate }: DateInputFieldProps) {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    onChangeDate(date);
    hideDatePicker();
  };

  return (
    <S.Wrapper>
      <S.Label>생년월일</S.Label>
      <S.ChangeDateButton onPress={showDatePicker}>
        <S.Text>{format(selectedDate, 'MMM d, yyyy')}</S.Text>
      </S.ChangeDateButton>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode='date'
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </S.Wrapper>
  );
}
