import { BTNType } from '@/utils/type';
import React from 'react';

export default function BTN({ onClick, children }: BTNType) {
  return (
    <button className="px-4 py-2 hover:bg-gray-200 rounded-md" onClick={onClick}>
      {children}
    </button>
  );
}
