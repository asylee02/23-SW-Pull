import Header from '@/components/Header';
import LinkedBTN from '@/components/LinkedBTN';
import { useSession } from 'next-auth/react';

export default function Home() {
  const { status } = useSession();
  return (
    <main className="w-screen h-screen flex flex-col items-center">
      <article className="text-center my-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-20 h-20 absolute -translate-x-6 -translate-y-7 -rotate-[24deg] text-gray-600 -z-10">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
          />
        </svg>
        <h1 className="text-9xl font-extrabold z-50">
          <span className="text-yellow-400">면</span>
          <span>접을</span>
          <span className="text-yellow-400">부</span>
          <span>탁해</span>
        </h1>
        <h2 className="mt-3 text-3xl font-semibold">명지인을 위한 모의 면접 사이트</h2>
        <LinkedBTN href={status === 'authenticated' ? '/interview' : '/'}>
          <div className="animate-bounce bg-gray-300 px-2 py-2 rounded-md text-lg font-bold ">시작하기</div>
        </LinkedBTN>
      </article>
    </main>
  );
}
