'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function SignupPage() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  async function onSubmit() {
    setIsLoading(true);
    try {
      router.push('/auth/login');
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className='flex min-h-screen items-center justify-center bg-gradient-to-b from-black to-gray-900 p-4'>
      <div className='relative w-full max-w-md space-y-8'>
        <div className='absolute inset-0 -z-10 bg-gradient-to-r from-violet-600/20 to-indigo-600/20 blur-3xl' />

        <div className='relative overflow-hidden rounded-2xl border border-gray-800 bg-black/40 p-8 backdrop-blur-xl'>
          <div className='pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent to-black/30' />

          <div className='relative'>
            <div className='mb-8 flex flex-col items-center space-y-2'>
              Icon Here
              <h1 className='text-2xl font-bold tracking-tight text-white'>
                Create an account
              </h1>
              <p className='text-gray-400'>
                Enter your information to get started
              </p>
            </div>

            <form onSubmit={onSubmit} className='space-y-6'>
              <div className='space-y-2'>
                <Label htmlFor='name' className='text-gray-200'>
                  Name
                </Label>
                <Input
                  id='name'
                  placeholder='John Doe'
                  className='border-gray-800 bg-gray-900/50 text-white placeholder:text-gray-500'
                />
              </div>

              <div className='space-y-2'>
                <Label htmlFor='email' className='text-gray-200'>
                  Email
                </Label>
                <Input
                  id='email'
                  type='email'
                  placeholder='name@example.com'
                  className='border-gray-800 bg-gray-900/50 text-white placeholder:text-gray-500'
                />
              </div>

              <div className='space-y-2'>
                <Label htmlFor='password' className='text-gray-200'>
                  Password
                </Label>
                <Input
                  id='password'
                  type='password'
                  className='border-gray-800 bg-gray-900/50 text-white placeholder:text-gray-500'
                />
              </div>

              <div className='space-y-2'>
                <Label htmlFor='confirmPassword' className='text-gray-200'>
                  Confirm Password
                </Label>
                <Input
                  id='confirmPassword'
                  type='password'
                  className='border-gray-800 bg-gray-900/50 text-white placeholder:text-gray-500'
                />
              </div>

              <Button
                type='submit'
                className='w-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:from-violet-700 hover:to-indigo-700'
                disabled={isLoading}
              >
                {isLoading && 'Loading...'}
                Create Account
              </Button>
            </form>

            <div className='mt-6 text-center'>
              <p className='text-gray-400'>
                Already have an account?{' '}
                <Link
                  href='/auth/login'
                  className='text-violet-400 hover:text-violet-300'
                >
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
