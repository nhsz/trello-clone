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
      id: '0',
      title: 'To Do',
      tasks: [{ id: 'c0', text: 'Learn JavaScript/TypeScript' }]
    },
    {
      id: '1',
      title: 'In Progress',
      tasks: [{ id: 'c2', text: 'Learn React' }]
    },
    {
      id: '2',
      title: 'Done',
      tasks: [{ id: 'c3', text: 'Learn NextJS' }]
    }
  ]
};

export { data };