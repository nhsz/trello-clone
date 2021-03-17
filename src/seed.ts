import { nanoid } from 'nanoid';
import { DragItem } from './dragItem';

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
  draggedItem: DragItem | undefined;
}

const data: AppState = {
  lists: [
    {
      id: nanoid(),
      title: 'To Do',
      tasks: [
        { id: nanoid(), text: 'Edit list title' },
        { id: nanoid(), text: 'Save on localStorage' },
        { id: nanoid(), text: 'Add Dark/Light Mode switch' },
        { id: nanoid(), text: 'Fix CSS bugs' }
      ]
    },
    {
      id: nanoid(),
      title: 'In Progress',
      tasks: [
        { id: nanoid(), text: 'List Actions menu' },
        { id: nanoid(), text: 'Remove list' }
      ]
    },
    {
      id: nanoid(),
      title: 'Done',
      tasks: [
        { id: nanoid(), text: 'Move card' },
        { id: nanoid(), text: 'Move list' },
        { id: nanoid(), text: 'Edit card' },
        { id: nanoid(), text: 'Remove card' },
        { id: nanoid(), text: 'Add card' },
        { id: nanoid(), text: 'Add list' }
      ]
    }
  ],
  draggedItem: undefined
};

export { data };
