import { useState, useEffect } from 'react';

export default function useCalendar() {
  const [monthDates, setMonthDates] = useState<Date[]>([]);
  const [currentMonth, setCurrentMonth] = useState<number>(new Date().getMonth());

  useEffect(() => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const firstDayOfMonth = new Date(year, currentMonth, 1);
    const lastDayOfMonth = new Date(year, currentMonth + 1, 0);

    const dates = [];
    for (let date = firstDayOfMonth; date <= lastDayOfMonth; date.setDate(date.getDate() + 1)) {
      dates.push(new Date(date));
    }

    setMonthDates(dates);
  }, [currentMonth]);

  return { monthDates, currentMonth, setCurrentMonth };
}
