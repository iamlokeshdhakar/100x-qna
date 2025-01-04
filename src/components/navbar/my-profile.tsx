'use client';

import ShowTooltip from '../show-tooltip';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from '../ui/menubar';
import { Avatar } from '../avatar';
import { Button } from '../ui/button';
import { LogOut } from 'lucide-react';
import { signOut } from 'next-auth/react';

const UserInfo = ({
  name,
  avatarURL,
  hideInfoOnMobile,
  email,
}: {
  name: string;
  avatarURL?: string;
  hideInfoOnMobile?: boolean;
  email?: string;
}) => {
  return (
    <div className='flex h-full w-fit max-w-44 items-center gap-1 md:pr-2'>
      <Avatar src={avatarURL} fallBackText={name.charAt(0).toUpperCase()} />
      <div
        className={` ${hideInfoOnMobile ? 'hidden sm:flex' : 'flex'} w-full max-w-28 flex-1 flex-col items-start gap-0`}
      >
        <ShowTooltip
          title={name}
          className='w-full truncate text-left leading-tight'
        >
          <span className='flex w-full flex-col truncate font-semibold capitalize leading-tight'>
            {name}
          </span>
        </ShowTooltip>
        {email && (
          <ShowTooltip
            title={email}
            className='w-full truncate text-left leading-tight'
          >
            <span className='w-full truncate text-xs font-bold leading-tight text-gray-500'>
              {email}
            </span>
          </ShowTooltip>
        )}
      </div>
    </div>
  );
};
const MyProfileMenu = () => {
  return (
    <Menubar className='flex h-full w-fit cursor-pointer items-center justify-center gap-1 space-x-0 border-none p-0 shadow-none'>
      <MenubarMenu>
        <MenubarTrigger className='cursor-pointer p-0 data-[state=close]:bg-transparent data-[state=open]:bg-transparent'>
          <Avatar src={''} fallBackText={'L'} />
        </MenubarTrigger>
        <MenubarContent className='mr-2 mt-2 p-2'>
          <>
            <UserInfo name={'lokesh'} email={'lokeshdhakar6633@gmail.com'} />
            <MenubarSeparator />
          </>
          <MenubarSeparator />

          <MenubarSeparator />

          <MenubarItem className='p-0'>
            <Button className='w-full' onClick={async () => await signOut()}>
              <LogOut />
              Logout
            </Button>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default MyProfileMenu;
