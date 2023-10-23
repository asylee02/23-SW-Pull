import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import LinkedBTN from './LinkedBTN';
import { signIn, signOut, useSession } from 'next-auth/react';
import BTN from './BTN';

export default function Header() {
  const { data: session, status } = useSession();

  return (
    <header className="w-full h-20 flex justify-around p-4 border-b-[1px] items-center shadow-md rounded-b-md bg-white">
      <Link href={'/'}>
        <Image src={'/icons/3-4.gif'} alt="logo" width={'150'} height={'15'} priority />
      </Link>
      <div className="flex gap-x-1 font-medium">
        {status === 'authenticated' ? (
          <>
            <LinkedBTN href="/my_page">{`${session?.user?.name}님의 마이페이지`}</LinkedBTN>
            <LinkedBTN href="/interview">인터뷰</LinkedBTN>
            <LinkedBTN href="/resumes">다른 이력서보기</LinkedBTN>
            <BTN
              onClick={() => {
                signOut();
              }}>
              로그아웃
            </BTN>
          </>
        ) : (
          <>
            <BTN
              onClick={() => {
                signIn('kakao');
              }}>
              카카오 로그인
            </BTN>
          </>
        )}
        {/* <LinkedBTN href="/tutorial">튜토리얼</LinkedBTN> */}
      </div>
    </header>
  );
}
