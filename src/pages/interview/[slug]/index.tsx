
import Test from '@/components/Test';
import VideoCall from '@/components/VideoCall';
import MyContext from '@/context/MyContext';
import React, { useRef, useState } from 'react';

type Props = {
  params: {
    slug: string;
  };
};

export default function Page({ params }: Props) {
  const [hidden, setHidden] = useState(false);
  const roomName = useRef<HTMLInputElement>(null);
  return (
    <MyContext.Provider value={{ hidden, setHidden, roomName: roomName }}>
      <main>
        {/* <VideoCall id={params.slug} /> */}
        <Test/>
      </main>
    </MyContext.Provider>
  );
}

export const getServerSideProps = async (context: any) => {
  const { slug } = context.params;
  return {
    props: {
      params: {
        slug,
      },
    },
  };
};
