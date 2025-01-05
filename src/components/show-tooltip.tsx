import React, { ReactNode } from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip';

const ShowTooltip = ({
  children,
  title,
  isDisabled,
  className,
}: {
  children: ReactNode;
  title: string;
  isDisabled?: boolean;
  className?: string;
}) => {
  return (
    <TooltipProvider delayDuration={1000}>
      <Tooltip open={isDisabled ? false : undefined}>
        <TooltipTrigger className={`${className}`}>{children}</TooltipTrigger>
        <TooltipContent>
          <span>{title}</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ShowTooltip;
