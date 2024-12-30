import React from 'react';
import NavbarButtons from './navbar-buttons';
import { getServerSession } from 'next-auth';

const Navbar = async () => {
  const session = await getServerSession();
  return (
    <div className='flex h-16 w-full items-center justify-between rounded-b-2xl border bg-gray-900 px-6'>
      <span className='text-xl font-bold text-blue-500'>
        100x <span className='text-foreground'>QnA</span>
      </span>
      <NavbarButtons isLoggedIn={!!session?.user} />
    </div>
  );
};

export default Navbar;
