import { nanoid } from 'nanoid';

interface Task {
  id: string;
  text: string;
}

export interface List {
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
      tasks: [
        { id: nanoid(), text: 'Remove list' },
        { id: nanoid(), text: 'Edit list title' },
        { id: nanoid(), text: 'Move card' },
        { id: nanoid(), text: 'Save on localStorage' }
      ]
    },
    {
      id: nanoid(),
      title: 'In Progress',
      tasks: [{ id: nanoid(), text: 'Edit card' }]
    },
    {
      id: nanoid(),
      title: 'Done',
      tasks: [
        { id: nanoid(), text: 'Remove card' },
        { id: nanoid(), text: 'Add card' },
        { id: nanoid(), text: 'Add list' }
      ]
    }
  ]
};

export { data };
