'use client';

import { ArrowBigUp } from 'lucide-react';
import { Question } from '@/types';
import { Badge } from '../ui/badge';
import { Card, CardHeader } from '../ui/card';

interface QuestionCardProps {
  question: Question;
  onVote: (id: string, value: number) => void;
}

export function QuestionCard({
  question,
  onVote,
}: Readonly<QuestionCardProps>) {
  return (
    <Card className='rounded-3xl'>
      <CardHeader className='flex flex-row items-start gap-4'>
        <div className='flex-1'>
          <h3 className='text-2xl font-semibold'>{question.title}</h3>
          <div className='mt-2 flex flex-wrap gap-2'>
            <Badge variant='secondary'>{question.topic}</Badge>
            <Badge variant='outline'>Week {question.week}</Badge>
          </div>
        </div>

        <button
          onClick={() => onVote(question.id, 1)}
          className='flex h-28 w-28 flex-col items-center justify-center rounded-2xl bg-secondary text-xl font-semibold text-primary'
        >
          <ArrowBigUp className='h-10 w-10' strokeWidth={1.5} />
          {question.votes}
        </button>
      </CardHeader>
    </Card>
  );
}
