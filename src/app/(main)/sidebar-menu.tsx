'use client';
import ShowTooltip from '@/components/show-tooltip';
import { Button } from '@/components/ui/button';
import {
  CircleUser,
  HelpCircle,
  LayoutDashboard,
  LucideHome,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const SIDE_BAR_MENU = [
  {
    id: 1,
    label: 'Home',
    icon: LucideHome,
    link: '/home',
  },
  {
    id: 2,
    label: 'Dashboard',
    icon: LayoutDashboard,
    link: '/dashboard',
  },
  {
    id: 2,
    label: 'My Questions',
    icon: HelpCircle,
    link: '/questions',
  },
  {
    id: 3,
    label: 'My Profile',
    icon: CircleUser,
    link: '/profile',
  },
];

const SideBarMenu = () => {
  const pathName = usePathname();

  return (
    <div className='flex h-full w-20 flex-col items-center justify-between gap-2 overflow-hidden rounded-tr-xl border bg-background py-6'>
      <div className='flex flex-col items-center gap-4'>
        {SIDE_BAR_MENU.map((item) => {
          return (
            <ShowTooltip title={item.label} key={item.id}>
              <Link href={item.link}>
                <Button
                  size={'icon'}
                  variant={pathName === item.link ? 'default' : 'secondary'}
                >
                  <item.icon />
                </Button>
              </Link>
            </ShowTooltip>
          );
        })}
      </div>
      <ShowTooltip title={'Feedback'}>
        <Button size={'icon'} variant={'outline'}>
          <HelpCircle />
        </Button>
      </ShowTooltip>
    </div>
  );
};

export default SideBarMenu;
