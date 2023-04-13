import { cn } from '@/lib/utils';
import { signIn, signOut, useSession } from 'next-auth/react';
import React from 'react';

export function SessionControlNavItems() {
  const { data: session, status } = useSession();

  const className = cn(
    'flex items-center text-lg font-semibold text-slate-600 hover:text-slate-900 dark:text-slate-100 sm:text-sm'
  );

  if (!session) {
    return (
      <div className={className} onClick={() => signIn()}>
        Sign In
      </div>
    );
  }

  if (session?.user) {
    console.log(session);

    return (
      <div className={className} onClick={() => signOut()}>
        Sign Out
      </div>
    );
  }
}
