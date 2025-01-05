import React from 'react';
import { ScrollArea } from '../ui/scroll-area';

const BodyWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <ScrollArea className='h-full w-full pb-10'>
      <div className='flex h-full w-full flex-col p-4'>{children}</div>
    </ScrollArea>
  );
};

export default BodyWrapper;
