export interface Question {
  id: string;
  title: string;
  content: string;
  author: string;
  topic: string;
  week: number;
  votes: number;
  createdAt: Date;
}

export type Topic =
  | 'Programming'
  | 'Mathematics'
  | 'Physics'
  | 'Chemistry'
  | 'Biology';
