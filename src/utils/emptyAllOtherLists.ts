import { List } from '../contexts';

const emptyAllOtherLists = (lists: List[], listId: string) => {
  let results: List[] = [];

  lists.forEach(list => {
    if (list.id !== listId) {
      results = results.concat({
        ...list,
        tasks: []
      });
    } else {
      results = results.concat(list);
    }
  });

  return results;
};

export { emptyAllOtherLists };
