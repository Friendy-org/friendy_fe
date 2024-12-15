import { useState } from 'react';
import Button from '../../atoms/Button/Button';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { format } from 'date-fns';
import S from './DateInputField.styled';

interface DateInputFieldProps {
  selectedDate: Date;
  onChangeDate: (date: Date) => void;
}

export default function DateInputField({
  selectedDate,
  onChangeDate,
}: DateInputFieldProps) {
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
      <Button onPress={showDatePicker}>
        {format(selectedDate, 'yyyy-MM-dd')}
      </Button>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode='date'
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </S.Wrapper>
  );
}
