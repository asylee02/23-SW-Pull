import { linkedBTNType } from '@/utils/type';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

export default function LinkedBTN(props: linkedBTNType) {
  const router = useRouter();

  if (props.href === router.pathname && props.href !== '/') {
    return (
      <Link className="px-4 py-2 hover:bg-gray-200  border-b-[1px] border-blue-800 hover:rounded-md hover:border-0" href={props.href}>
        {props.children}
      </Link>
    );
  }

  return (
    <Link className="px-4 py-2 hover:bg-gray-200 rounded-md" href={props.href}>
      {props.children}
    </Link>
  );
}
