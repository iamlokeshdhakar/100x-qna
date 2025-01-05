import React from 'react';
import Text from '../text/text';

const HeaderWrapper = ({
  children,
  title,
}: {
  children?: React.ReactNode;
  title: string;
}) => {
  return (
    <div className='flex max-h-20 w-full items-center justify-between border-b bg-background p-4 shadow-sm'>
      <div className='flex flex-col items-start gap-1'>
        <Text variant='xl'>{title}</Text>
      </div>
      {children}
    </div>
  );
};

export default HeaderWrapper;
