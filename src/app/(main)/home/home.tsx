'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';
import { FilterBar } from '@/components/filters/filter-bar';
import { QuestionCard } from '@/components/cards/question-card';
import { mockQuestions } from '@/constant';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('');
  const [selectedWeek, setSelectedWeek] = useState('');
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const [questions, setQuestions] = useState(mockQuestions);

  const filteredQuestions = questions
    .filter((q) => {
      const matchesSearch =
        q.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.author.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTopic = !selectedTopic || q.topic === selectedTopic;
      const matchesWeek = !selectedWeek || q.week.toString() === selectedWeek;
      return matchesSearch && matchesTopic && matchesWeek;
    })
    .sort((a, b) => b.votes - a.votes);

  const handleVote = (id: string, value: number) => {
    console.log(id, value);
  };

  return (
    <main className='min-h-screen'>
      <div className='container mx-auto px-2'>
        <FilterBar
          onSearchChange={setSearchQuery}
          onTopicChange={setSelectedTopic}
          onWeekChange={setSelectedWeek}
        />

        <Button className='my-4 w-full md:hidden' size='lg'>
          <PlusCircle className='mr-2 h-5 w-5' />
          Ask Question
        </Button>

        <div className='my-6 grid grid-cols-2 gap-4'>
          {filteredQuestions.map((question) => (
            <QuestionCard
              key={question.id}
              question={question}
              onVote={handleVote}
            />
          ))}
          {filteredQuestions.length === 0 && (
            <div className='py-12 text-center'>
              <p className='text-muted-foreground'>
                No questions found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
