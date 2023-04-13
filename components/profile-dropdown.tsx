import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { signIn, signOut, useSession } from 'next-auth/react';

export function ProfileDropdown() {
  const { data: session, status } = useSession();

  if (!session) {
    return <div onClick={() => signIn()}>Sign In</div>;
  }

  if (session?.user) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage src={session.user.image as string} />
            <AvatarFallback>{session.user.name}</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" forceMount>
          <DropdownMenuItem onClick={() => signOut()}>
            Sign Out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
}
