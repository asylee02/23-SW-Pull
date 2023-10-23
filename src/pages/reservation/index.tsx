import React from 'react';
import Header from '@/components/Header';
import { useSession } from 'next-auth/react';
import Calender from '@/components/Calender';

export default function reservation() {
  return (
    <main className="flex flex-col justify-center items-center w-full h-full">
      <Calender />
    </main>
  );
}
