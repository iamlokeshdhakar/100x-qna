import Navbar from '@/components/navbar/navbar';
import type { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import SideBarMenu from './sidebar-menu';

export const metadata: Metadata = {
  title: '100x Qna',
  description: '100x Qna is a platform for asking and answering questions.',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  if (!session?.user) {
    redirect('/auth/login');
  }
  return (
    <div className='flex h-screen w-full flex-col gap-2'>
      <Navbar />
      <div className='flex w-full flex-1 gap-2 overflow-hidden'>
        <SideBarMenu />

        <div className='h-full w-full overflow-hidden rounded-t-xl border bg-background'>
          {children}
        </div>
      </div>
    </div>
  );
}
