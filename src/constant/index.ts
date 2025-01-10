export const topics = [
  'Programming',
  'Mathematics',
  'Physics',
  'Chemistry',
  'Biology',
] as const;

export const weeks = Array.from({ length: 12 }, (_, i) => i + 1);

// Mock data for development
export const mockQuestions = [
  {
    id: '1',
    title: 'How do I implement a binary search tree in JavaScript?',
    content:
      "I'm trying to understand the implementation of a binary search tree data structure in JavaScript. Can someone explain the basic operations like insertion, deletion, and traversal?",
    author: 'John Doe',
    topic: 'Programming',
    week: 3,
    votes: 15,
    createdAt: new Date('2024-03-20'),
  },
  {
    id: '2',
    title: 'Understanding quantum superposition',
    content:
      "Can someone explain the concept of quantum superposition in simple terms? How does it relate to Schrödinger's cat thought experiment?",
    author: 'Alice Smith',
    topic: 'Physics',
    week: 5,
    votes: 23,
    createdAt: new Date('2024-03-21'),
  },
  {
    id: '3',
    title: 'Solving differential equations',
    content:
      'What are the main methods for solving first-order differential equations? Looking for a comprehensive explanation with examples.',
    author: 'Bob Johnson',
    topic: 'Mathematics',
    week: 4,
    votes: 18,
    createdAt: new Date('2024-03-22'),
  },
] as const;
