import Navbar from '@/components/navbar/navbar';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function Page() {
  const session = await getServerSession();

  if (session?.user) {
    redirect('/home');
  }

  return (
    <div>
      <Navbar />
      Hello from root page
      {JSON.stringify(session)}
    </div>
  );
}
