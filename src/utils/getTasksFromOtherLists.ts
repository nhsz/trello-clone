import { List, Task } from '../contexts';

const getTasksFromOtherLists = (lists: List[], listId: string) => {
  let results: Task[] = [];

  lists.forEach(list => {
    if (list.id !== listId) {
      results = results.concat(list.tasks);
    }
  });

  return results;
};

export { getTasksFromOtherLists };
