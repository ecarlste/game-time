import { signIn, signOut, useSession } from 'next-auth/react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const { data: session, status } = useSession();
  const userEmail = session?.user?.email;

  if (status === 'loading') {
    return <p>Hang on there...</p>;
  }

  if (status === 'authenticated') {
    return (
      <>
        <p>Signed in as {userEmail}</p>
        <button onClick={() => signOut()}>Sign out</button>
        <img src="/images/generated-mecha-thumbnail.png" />
      </>
    );
  }

  return (
    <>
      <p>Not signed in.</p>
      <button onClick={() => signIn('google')}>Sign in</button>
    </>
  );
}
