import React from 'react';
import { getServerSession } from 'next-auth';
import MyProfileMenu from './my-profile';
import Link from 'next/link';
import { Button } from '../ui/button';
import { LogIn } from 'lucide-react';
import { AddQuestionDialog } from '../dialogs/add-question';

const Navbar = async () => {
  const session = await getServerSession();
  return (
    <div className='flex h-16 w-full items-center justify-between rounded-b-2xl border bg-background px-6'>
      <span className='text-xl font-extrabold text-primary'>
        100x <span className='text-foreground'>QnA</span>
      </span>
      <div className='flex items-center gap-4'>
        {session?.user ? (
          <>
            <AddQuestionDialog />
            <MyProfileMenu />
          </>
        ) : (
          <Link href={'/auth/login'}>
            <Button>
              <LogIn />
              Sign In
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
