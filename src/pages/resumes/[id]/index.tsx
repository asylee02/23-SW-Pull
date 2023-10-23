import { getResume } from '@/services/resumes';
import { timeAgo } from '@/utils/timeAgo';
import { ResumesType } from '@/utils/type';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

export default function Detail() {
  const router = useRouter();
  const [data, setData] = useState<ResumesType>();

  useEffect(() => {
    const path = router.asPath.split('/')[2];
    const fetchData = async () => {
      const data = await getResume(+path);
      setData(data);
    };
    fetchData();
  }, [router]);
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-3/4 text-left">
        <p className="text-yellow-500 font-bold text-xl">이력서</p>
        <h1 className="text-2xl font-semibold">
          {data?.title}
          이것은 제목
        </h1>
        <div className="flex items-center gap-x-2">
          <Image src={data?.image!} alt="사진" width={40} height={40} className="w-8 h-8 rounded-full" priority />
          <div>
            <p>{data?.name}</p>
            <time className="text-xs text-gray-500">{timeAgo(data?.create_at + '')}</time>
          </div>
        </div>
        <pre className="w-3/4 overflow-auto whitespace-pre-wrap">{data?.resumeText}</pre>
      </div>
    </div>
  );
}
