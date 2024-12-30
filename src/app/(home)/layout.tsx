import Navbar from '@/components/navbar/navbar';
import { Button } from '@/components/ui/button';
import type { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import {
  CircleHelp,
  HelpCircle,
  HomeIcon,
  MessageSquareDot,
} from 'lucide-react';

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
        <div className='flex h-full w-20 flex-col items-center justify-between gap-2 overflow-hidden rounded-tr-xl border bg-gray-900 py-6'>
          <div className='flex flex-col items-center gap-2'>
            <Button size={'icon'}>
              <HomeIcon />
            </Button>
            <Button size={'icon'} variant={'ghost'}>
              <CircleHelp />
            </Button>
            <Button size={'icon'} variant={'ghost'}>
              <MessageSquareDot />
            </Button>
          </div>
          <Button size={'icon'} variant={'secondary'}>
            <HelpCircle />
          </Button>
        </div>
        <div className='h-full w-full rounded-t-xl border bg-gray-900 p-6'>
          {children}
        </div>
      </div>
    </div>
  );
}
