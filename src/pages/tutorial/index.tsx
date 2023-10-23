import React from 'react';
import Header from '@/components/Header';
import { useSession } from 'next-auth/react';

export default function tutorial() {
  // const { data: session, status } = useSession();
  // if (status === 'authenticated') {
  //   //   로그인안되면 홈으로 가게 리다이렉트
  // }
  return (
    <>
      {/* <Header /> */}
      <main>test</main>
    </>
  );
}
