import React, { useEffect, useRef, useState } from 'react';
import useCalendar from '@/hooks/useCalendar';
import ReservationCard from './ReservationCard';
import BTN from './BTN';
import { toDate } from '@/utils/toDate';

export default function Calendar() {
  // 제출 버튼하고 상태관리 끝내면 될듯
  const { monthDates, currentMonth } = useCalendar();
  const [isOpen, setOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState<string | undefined>();
  const [selectedDate, setSelectedDate] = useState<Date>();
  const Outside = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (Outside.current && !Outside.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const formatDate = (date: Date | null) => {
    if (date !== null) {
      const options = { day: 'numeric' } as const;
      return date.toLocaleDateString('ko', options);
    }
  };

  const weeks: (Date | null)[][] = [];
  let currentWeek: (Date | null)[] = [];
  let currentDay = 0;

  monthDates.forEach((date, index) => {
    const dayOfWeek = date.getDay();

    if (dayOfWeek < currentDay) {
      while (currentDay < 6) {
        currentWeek.push(null);
        currentDay++;
      }
      weeks.push(currentWeek);
      currentWeek = [];
      currentDay = 0;
    }

    while (currentDay < dayOfWeek) {
      currentWeek.push(null);
      currentDay++;
    }

    currentWeek.push(date);
    currentDay = (dayOfWeek + 1) % 7;

    if (currentWeek.length === 7 || index === monthDates.length - 1) {
      weeks.push(currentWeek);
      currentWeek = [];
      currentDay = 0;
    }
  });

  const WEEKDAYS = ['일', '월', '화', '수', '목', '금', '토'] as const;

  const handleOpen = (date: Date) => {
    if (date) {
      setOpen(true);
      setSelectedDate(date);
    }
  };

  const handleTimeSelected = (time: string) => {
    console.log('🚀 ~ handleTimeSelected ~ time:', time);
    setSelectedTime(time);
  };

  const handleClicked = () => {
    if (!(selectedTime && selectedDate)) return;
    alert(` ${selectedDate?.getDate()}일 ${selectedTime}시 예약완료`);

    console.log(toDate(selectedDate?.getFullYear(), currentMonth, selectedDate?.getDate()!, +selectedTime));
  };

  return (
    <>
      <div className="m-4 p-4 bg-gray-100 rounded-xl max-w-[50rem] w-4/5 text-center">
        <h2 className="text-lg font-semibold mb-4">{currentMonth + 1 + '월'}</h2>
        <table className="border-collapse w-full">
          <thead>
            <tr>
              {WEEKDAYS.map((weekday) => (
                <th key={weekday} className="border-gray-300 border p-2">
                  {weekday}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {weeks.map((week, weekIndex) => (
              <tr key={weekIndex}>
                {week.map((date, dayIndex) => (
                  <td
                    key={dayIndex}
                    className={`border-gray-300 border p-2 text-gray-700 ${dayIndex % 6 === 0 ? 'text-red-400' : ''}`}
                    onClick={dayIndex % 6 === 0 ? () => alert('휴무입니다.') : () => handleOpen(date!)}>
                    {formatDate(date)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isOpen ? (
        <>
          <ReservationCard onTimeSelected={handleTimeSelected} date={selectedDate} />
          <BTN onClick={handleClicked}>예약하기</BTN>
        </>
      ) : null}
    </>
  );
}
