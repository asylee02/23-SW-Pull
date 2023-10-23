import { CardType } from '@/utils/type';
import React from 'react';

export default function Card({ children }: CardType) {
  return (
    <div className="min-w-[12rem] md:w-88 sm:w-60  aspect-square rounded-2xl flex flex-col justify-center items-center bg-blue-400 shadow-2xl hover:bg-blue-500 gap-y-4">
      {children}
    </div>
  );
}
