import { User } from '@/types/user';
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

function ProfileMasthead(props: { user: User }) {
  return (
    <div className="flex flex-row justify-center">
      <Avatar className="h-[120px] w-[120px]">
        <AvatarImage src={props.user.image} />
        <AvatarFallback>{props.user.name}</AvatarFallback>
      </Avatar>
    </div>
  );
}

export default ProfileMasthead;
