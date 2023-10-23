'use client';
import { getReservations } from '@/services/reservation';
import { ReservationCardProps, ReservationType } from '@/utils/type';
import React, { useState, useEffect } from 'react';

const TIME = ['09', 10, 11, 13, 14, 15, 16];

export default function ReservationCard({ onTimeSelected, date }: ReservationCardProps) {
  const [time, setTime] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTime(e.target.value);
  };

  useEffect(() => {
    onTimeSelected(time);
  }, [time]);

  return (
    <div className="w-4/5 p-4 bg-gray-200 rounded-xl flex gap-x-10 justify-around items-center">
      <p className="text-lg m-2">{date?.toDateString()}</p>
      <div className="flex-grow grid grid-cols-2 gap-x-4 gap-y-1">
        {TIME.map((hour, index) => (
          <label key={index}>
            <input type="radio" name="setTime" value={hour} onChange={handleChange} />
            {`${hour}:00~${+hour + 1}:00`}
          </label>
        ))}
      </div>
    </div>
  );
}
