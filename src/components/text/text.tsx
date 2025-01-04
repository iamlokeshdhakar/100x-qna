import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export type TextVariant = '3xl' | 'xl' | 'lg' | 'base' | 'sub' | 'xs';

interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: TextVariant;
  children: React.ReactNode;
  className?: string;
}

const Text = forwardRef<HTMLSpanElement, TextProps>(
  ({ variant = 'base', children, className, ...props }, ref) => {
    const baseStyles = 'text-foreground h-fit';

    const variantStyles: Record<TextVariant, string> = {
      '3xl': 'text-2xl md:text-3xl font-bold',
      xl: 'text-xl md:text-2xl font-bold',
      lg: 'text-lg md:text-xl font-semibold',
      base: 'text-base md:text-lg font-normal',
      sub: 'text-sm md:text-base font-medium',
      xs: 'text-xs md:text-xs font-medium',
    };

    const combinedClassName = cn(baseStyles, variantStyles[variant], className);

    return (
      <span className={combinedClassName} {...props} ref={ref}>
        {children}
      </span>
    );
  }
);

Text.displayName = 'Text'; // Useful for debugging

export default Text;
