import { LoaderCircle } from 'lucide-react';
import React from 'react';

const SpinnerLoader = ({ color }: { color?: string }) => {
  return <LoaderCircle className='animate-spin' color={color} />;
};

export default SpinnerLoader;
