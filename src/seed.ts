import { nanoid } from 'nanoid';
import { DragItem } from './dragItem';

export interface Task {
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
        { id: nanoid(), text: 'list actions menu: sort by' },
        { id: nanoid(), text: 'list: edit title' },
        { id: nanoid(), text: 'localStorage: set/get' },
        { id: nanoid(), text: 'css: fix bugs' },
        { id: nanoid(), text: 'testing: add tests for reducer fns & utils' }
      ]
    },
    {
      id: nanoid(),
      title: 'In Progress',
      tasks: [{ id: nanoid(), text: 'list actions menu: copy list' }]
    },
    {
      id: nanoid(),
      title: 'Done',
      tasks: [
        { id: nanoid(), text: 'show about menu: button' },
        {
          id: nanoid(),
          text:
            'list actions menu: archive all cards, move all cards to a list, archive list, add card, move list'
        },
        { id: nanoid(), text: 'list: add, remove, move, ' },
        { id: nanoid(), text: 'task: add, edit, remove, move' }
      ]
    }
  ],
  draggedItem: undefined
};

export { data };
