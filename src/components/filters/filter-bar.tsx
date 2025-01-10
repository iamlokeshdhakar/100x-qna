'use client';

import { Search } from 'lucide-react';
import { Input } from '../ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { topics, weeks } from '@/constant';

interface FilterBarProps {
  onSearchChange: (value: string) => void;
  onTopicChange: (value: string) => void;
  onWeekChange: (value: string) => void;
}

export function FilterBar({
  onSearchChange,
  onTopicChange,
  onWeekChange,
}: FilterBarProps) {
  return (
    <div className='flex flex-col gap-4 rounded-lg border p-4 shadow-sm md:flex-row'>
      <div className='relative flex-1'>
        <Search className='absolute left-3 top-3 h-4 w-4 text-muted-foreground' />
        <Input
          placeholder='Search questions...'
          className='pl-10'
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      <Select onValueChange={onTopicChange}>
        <SelectTrigger className='w-full md:w-[180px]'>
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
      <Select onValueChange={onWeekChange}>
        <SelectTrigger className='w-full md:w-[180px]'>
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
  );
}
