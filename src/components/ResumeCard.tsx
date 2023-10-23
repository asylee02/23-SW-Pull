import { timeAgo } from '@/utils/timeAgo';
import { ResumesType } from '@/utils/type';
import Image from 'next/image';
import React from 'react';
import LinkedBTN from './LinkedBTN';

export default function ResumeCard({ name, title, resumeId, image, create_at }: ResumesType) {
  console.log(image);
  return (
    <LinkedBTN href={`/resumes/${resumeId}`}>
      <div className=" w-52 aspect-square bg-white shadow-xl rounded-lg flex flex-col justify-around p-4">
        <p className="text-yellow-500 font-bold">이력서</p>
        <p className="w-full text-lg font-medium text-ellipsis overflow-hidden break-words">{title}</p>
        <div className="flex items-center gap-x-2">
          <Image src={image!} alt="사진" width={40} height={40} className="w-8 h-8 rounded-full" priority />
          <div>
            <p>{name}</p>
            <time className="text-xs text-gray-500">{timeAgo(create_at + '')}</time>
          </div>
        </div>
      </div>
    </LinkedBTN>
  );
}
