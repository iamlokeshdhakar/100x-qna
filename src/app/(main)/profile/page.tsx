import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import HeaderWrapper from '@/components/wrappers/HeaderWrapper';
import BodyWrapper from '@/components/wrappers/BodyHeader';

export default async function page() {
  const session = await getServerSession();
  if (!session?.user) {
    redirect('/auth/login');
  }
  return (
    <>
      <HeaderWrapper title='My Profile'></HeaderWrapper>
      <BodyWrapper>My Profile</BodyWrapper>
    </>
  );
}
