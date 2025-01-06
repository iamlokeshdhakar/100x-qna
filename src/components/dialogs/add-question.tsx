'use client';

import { PenLine } from 'lucide-react';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { topics, weeks } from '@/constant';
import { Textarea } from '../ui/textarea';
import { DialogDescription } from '@radix-ui/react-dialog';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import SpinnerLoader from '../loader/spinner-loader';

export function AddQuestionDialog() {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [topic, setTopic] = useState('');
  const [week, setWeek] = useState('');
  const [author, setAuthor] = useState('');
  const [isShortForm, setIsShortForm] = useState(true);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content || !topic || !week || !author) return;
    setIsSubmitting(true);

    setOpen(false);
    setTitle('');
    setContent('');
    setTopic('');
    setWeek('');
    setAuthor('');
    setIsSubmitting(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <PenLine />
          Post Question
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[600px]'>
        <DialogHeader>
          <DialogTitle>Post a Question</DialogTitle>
          <DialogDescription>
            {isShortForm
              ? 'For short-form questions, please ask a concise one or two-line question.'
              : 'In long-form questions, you can write detailed discussions and include links and screenshots.'}
          </DialogDescription>
        </DialogHeader>
        <div className='flex h-14 w-full items-center justify-between gap-2 rounded-lg border bg-secondary p-1'>
          <button
            className={`flex h-full w-1/2 cursor-pointer items-center justify-center rounded-lg ${isShortForm && 'border bg-background shadow-sm'}`}
            onClick={() => setIsShortForm(true)}
          >
            Short Form
          </button>
          <button
            className={`flex h-full w-1/2 cursor-pointer items-center justify-center rounded-lg ${!isShortForm && 'border bg-background shadow-sm'}`}
            onClick={() => setIsShortForm(false)}
          >
            Long Form
          </button>
        </div>
        <QuestionsGuideLines isShortForm={isShortForm} />
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div className='space-y-2'>
            <Input
              placeholder='Question title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          {!isShortForm && (
            <div className='space-y-2'>
              <Textarea
                placeholder='Describe your question in detail...'
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className='min-h-[100px] w-full border'
              />
            </div>
          )}
          <div className='grid grid-cols-2 gap-4'>
            <Select value={topic} onValueChange={setTopic}>
              <SelectTrigger>
                <SelectValue placeholder='Select Topic' />
              </SelectTrigger>
              <SelectContent>
                {topics.map((topic) => (
                  <SelectItem key={topic} value={topic}>
                    {topic}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={week} onValueChange={setWeek}>
              <SelectTrigger>
                <SelectValue placeholder='Select Week' />
              </SelectTrigger>
              <SelectContent>
                {weeks.map((week) => (
                  <SelectItem key={week} value={week.toString()}>
                    Week {week}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button type='submit' className='w-full' disabled={isSubmitting}>
            {isSubmitting && <SpinnerLoader />}
            Submit Question
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

const QuestionsGuideLines = ({ isShortForm }: { isShortForm: boolean }) => {
  return (
    <Accordion
      type='single'
      collapsible
      className='w-full rounded-lg border p-3 py-0'
    >
      <AccordionItem value='item-3'>
        <AccordionTrigger className='decoration-'>
          Questions Guidelines
        </AccordionTrigger>
        <AccordionContent>
          {isShortForm ? (
            <div>
              <h4 className='mb-2 font-semibold'>Short Form Questions:</h4>
              <ul className='list-disc space-y-1 pl-4'>
                <li>Keep it concise - one or two lines</li>
                <li>Focus on a single, specific problem</li>
                <li>Similar questions will be grouped together</li>
              </ul>
            </div>
          ) : (
            <div>
              <h4 className='mb-2 font-semibold'>Long Form Questions:</h4>
              <ul className='list-disc space-y-1 pl-4'>
                <li>Detailed explanations welcome</li>
                <li>Can include links and code snippets</li>
                <li>Upload screenshots or images</li>
                <li>Will be shown separately in discussions</li>
              </ul>
            </div>
          )}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
