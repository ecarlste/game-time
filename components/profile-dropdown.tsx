import React from 'react';
import { DropdownMenu, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

export function ProfileDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>My Username</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
    </DropdownMenu>
  );
}
