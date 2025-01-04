import { urlValidator } from '@/utils/validator';
import Image from 'next/image';
import { ClassNameValue } from 'tailwind-merge';

export function Avatar({
  src = '',
  alt = 'avatar',
  fallBackText,
  className,
  onClick,
  isBase64Format,
}: Readonly<{
  src?: string;
  alt?: string;
  isBase64Format?: boolean;
  fallBackText: string;
  className?: ClassNameValue;
  onClick?: () => void;
}>) {
  const isValid = urlValidator(src) || isBase64Format;

  return (
    <button
      className={`relative flex h-10 w-10 flex-shrink-0 items-center justify-center overflow-hidden rounded-full border-2 bg-secondary md:h-10 md:w-10 ${className}`}
      onClick={onClick}
    >
      {src && isValid ? (
        <Image
          className='size-full rounded-[inherit] object-cover'
          fill
          objectFit='cover'
          src={src}
          alt={alt}
        />
      ) : (
        <span className='text-lg font-semibold text-foreground'>
          {fallBackText}
        </span>
      )}
    </button>
  );
}
