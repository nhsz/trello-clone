import { List } from '../contexts';

const findTaskList = (lists: List[], id: string) => {
  let listId = lists[0].id;

  for (const list of lists) {
    for (const task of list.tasks) {
      if (task.id === id) listId = list.id;
    }
  }

  return listId;
};

export { findTaskList };
