import React from 'react';
import Header from '@/components/Header';
import { useSession } from 'next-auth/react';
import Card from '@/components/Card';
import LinkedBTN from '@/components/LinkedBTN';
import Image from 'next/image';

export default function interview() {
  // const { data: session, status } = useSession();
  // if (status === 'authenticated') {
  //   //   로그인안되면 홈으로 가게 리다이렉트
  // }
  return (
    <>
      {/* <Header /> */}
      <main className="w-full px-10">
        <div className="mt-28 w-full flex sm:flex-row flex-col  justify-center lg:gap-x-40 md:gap-x-20 sm:gap-x-10 gap-x-4">
          <LinkedBTN href="/reservation">
            <Card>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
              <div className="text-center">
                <p>전문가와 모의 면접</p>
                <p>예약하기</p>
              </div>
            </Card>
          </LinkedBTN>
          <LinkedBTN href="/interview/ai">
            <Card>
              <Image src={'/icons/artificial-intelligence-ai-icon.svg'} alt="logo" width={40} height={40} className="w-16 h-16" priority />

              <p>AI 면접</p>
            </Card>
          </LinkedBTN>
        </div>
      </main>
    </>
  );
}
