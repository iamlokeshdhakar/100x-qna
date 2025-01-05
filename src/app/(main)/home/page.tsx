import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import HeaderWrapper from '@/components/wrappers/HeaderWrapper';
import { AddQuestionDialog } from '@/components/dialogs/add-question';
import BodyWrapper from '@/components/wrappers/BodyHeader';

export default async function page() {
  const session = await getServerSession();
  if (!session?.user) {
    redirect('/auth/login');
  }
  return (
    <>
      <HeaderWrapper title='Home Page'>
        <AddQuestionDialog />
      </HeaderWrapper>
      <BodyWrapper>Home Page</BodyWrapper>
    </>
  );
}
