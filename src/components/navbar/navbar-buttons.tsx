'use client';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { LogIn, LogOut } from 'lucide-react';

const NavbarButtons = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  return (
    <div className='flex items-center gap-2'>
      {isLoggedIn ? (
        <Button onClick={async () => await signOut()}>
          <LogOut />
          Logout
        </Button>
      ) : (
        <Link href={'/auth/login'}>
          <Button>
            <LogIn />
            Sign In
          </Button>
        </Link>
      )}
    </div>
  );
};

export default NavbarButtons;
