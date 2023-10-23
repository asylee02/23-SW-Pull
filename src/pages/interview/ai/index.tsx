import TypingAni from '@/components/TypingAni';
import LinkedBTN from '@/components/LinkedBTN';
import React, { useState } from 'react';

export default function ai() {
  const [selectedValue, setSelectedValue] = useState('');

  const handleSelected = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setSelectedValue(e.target.value);
  };

  return (
    <div className="mt-52">
      <div className="flex h-4/5 justify-center items-center">
        <div className="w-72">
          <h1 className="text-4xl font-bold">AI 면접</h1>
          <TypingAni textColor="black" fontSize="text-2xl">
            면접을 진행하실 트랙을 선택해주세요
          </TypingAni>
        </div>
        <select className="px-4 py-2 bg-gray-200 rounded-lg" onChange={handleSelected}>
          <option value="BE">백엔드</option>
          <option value="FE">프론트엔드</option>
        </select>
      </div>
      <div className="flex justify-center mt-10">
        <LinkedBTN href={'/interview/ai/cs'}>
          <div className="px-4 py-2 bg-blue-600 rounded-lg text-white w-28 text-center">면접 진행</div>
        </LinkedBTN>
      </div>
    </div>
  );
}
