import { nanoid } from 'nanoid';

interface Task {
  id: string;
  text: string;
}

interface List {
  id: string;
  title: string;
  tasks: Task[];
}

export interface AppState {
  lists: List[];
}

const data: AppState = {
  lists: [
    {
      id: nanoid(),
      title: 'To Do',
      tasks: [{ id: nanoid(), text: 'Learn JavaScript/TypeScript' }]
    },
    {
      id: nanoid(),
      title: 'In Progress',
      tasks: [{ id: nanoid(), text: 'Learn React' }]
    },
    {
      id: nanoid(),
      title: 'Done',
      tasks: [{ id: nanoid(), text: 'Learn NextJS' }]
    }
  ]
};

export { data };
