import React from 'react';
import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

export function SessionControlMenuItem() {
  const { data: session, status } = useSession();

  return (
    <>
      {!session && (
        <DropdownMenuItem>
          <div onClick={() => signIn()}>Sign In</div>
        </DropdownMenuItem>
      )}
      {session?.user && (
        <DropdownMenuItem>
          <div onClick={() => signOut()}>Sign Out</div>
        </DropdownMenuItem>
      )}
    </>
  );
}
