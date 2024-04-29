import { useForm } from 'react-hook-form';
import * as S from './ModalInputDeadline.style';
import { useEffect, useRef, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

interface DeadlineData {
  title: string;
}
interface ModalInputDeadlineProps {
  onDeadlineChange: (newDeadline: string) => void;
}
const ModalInputDeadline: React.FC<ModalInputDeadlineProps> = ({ onDeadlineChange }) => {
  const { register, setValue, watch } = useForm<DeadlineData>();
  const [calendarVisible, setCalendarVisible] = useState(false);
  const [dateSelected, setDateSelected] = useState(false);
  const deadlineValue = watch('title');
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setCalendarVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleDateChange = (value: Date | Date[]) => {
    const selectedDate = Array.isArray(value) ? value[0] : value;

    const toLocaleDateTimeString = (date: Date) => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');

      return `${year}-${month}-${day} ${hours}:${minutes}`;
    };

    const dateTimeString = toLocaleDateTimeString(selectedDate);

    setValue('title', dateTimeString);
    setCalendarVisible(false);
    setDateSelected(true);
    onDeadlineChange(dateTimeString);
  };

  const toggleCalendar = () => {
    setCalendarVisible(!calendarVisible);
  };

  return (
    <S.ModalInputDeadlineWrapper ref={wrapperRef}>
      <S.ModalInputTitleLabel htmlFor='title'>마감일</S.ModalInputTitleLabel>
      <S.ModalInputTitleInput
        {...register('title')}
        placeholder='날짜를 입력해 주세요'
        value={deadlineValue || ''}
        onClick={toggleCalendar}
        dateSelected={dateSelected}
      />
      {calendarVisible && (
        <S.CalendarWrapper>
          <Calendar onChange={handleDateChange} />
        </S.CalendarWrapper>
      )}
    </S.ModalInputDeadlineWrapper>
  );
};

export default ModalInputDeadline;
