import { useForm } from 'react-hook-form';
import * as S from './ModalInputDeadline.style';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

interface DeadlineData {
  title: string;
}

const ModalInputDeadline: React.FC = () => {
  const { register, setValue, watch } = useForm<DeadlineData>();
  const [calendarVisible, setCalendarVisible] = useState(false);
  const [dateSelected, setDateSelected] = useState(false);
  const deadlineValue = watch('title');

  const handleDateChange = (value: Date | Date[]) => {
    const selectedDate = Array.isArray(value) ? value[0] : value;

    const toLocaleDateString = (date: Date) => {
      const offset = date.getTimezoneOffset();
      const localDate = new Date(date.getTime() - offset * 60 * 1000);
      return localDate.toISOString().split('T')[0];
    };

    setValue('title', toLocaleDateString(selectedDate));
    setCalendarVisible(false);
    setDateSelected(true);
  };

  return (
    <S.ModalInputDeadlineWrapper>
      <S.ModalInputTitleLabel htmlFor='title'>마감일</S.ModalInputTitleLabel>
      <S.ModalInputTitleInput
        {...register('title')}
        placeholder='날짜를 입력해 주세요'
        onFocus={() => setCalendarVisible(true)}
        value={deadlineValue || ''}
        onChange={() => {}}
        dateSelected={dateSelected}
      />
      {calendarVisible && <Calendar onChange={handleDateChange} />}
    </S.ModalInputDeadlineWrapper>
  );
};

export default ModalInputDeadline;
