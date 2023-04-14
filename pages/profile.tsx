import ProfileMasthead from '@/components/user/profile-masthead';
import { User } from '@/types/user';
import { GetServerSidePropsContext } from 'next';
import { Session } from 'next-auth';
import { getSession } from 'next-auth/react';
import React from 'react';

export default function ProfilePage(props: { session: Session }) {
  return <ProfileMasthead user={props.session.user as User} />;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}
