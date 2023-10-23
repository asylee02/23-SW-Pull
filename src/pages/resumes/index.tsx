import ResumeCard from '@/components/ResumeCard';
import LinkedBTN from '@/components/LinkedBTN';
import { getResumes } from '@/services/resumes';
import { ResumesType } from '@/utils/type';
import React, { useEffect, useState } from 'react';

export default function index() {
  const [resumes, setResumes] = useState<ResumesType[]>();

  useEffect(() => {
    const fetchData = async () => {
      const resumes = await getResumes();
      setResumes(resumes);
      console.log(resumes);
    };
    fetchData();
  }, []);

  return (
    <main className="w-full">
      <div className="w-full flex justify-around items-center py-10">
        <h1 className="text-2xl font-semibold">나와 다른 사람의 이력서를 비교해보세요</h1>
        <LinkedBTN href={'/my_page'}>
          <div className="bg-blue-500 px-4 py-2 rounded-md font-medium text-white">이력서 업로드</div>
        </LinkedBTN>
      </div>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-3 gap-3">
          {resumes &&
            resumes.map((resume) => (
              <div key={resume.resumeId}>
                <ResumeCard name={resume.name!} title={resume.title!} resumeId={resume.resumeId!} image={resume.image} create_at={resume.create_at!} userId={resume.userId} resumeText={''} isVisuable={false} />
              </div>
            ))}
        </div>
      </div>
    </main>
  );
}
