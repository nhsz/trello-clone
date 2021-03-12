import { insertItemAtIndex, removeItemAtIndex } from '../utils';

const moveItem = <T>(array: T[], fromIndex: number, toIndex: number) => {
  const item = array[fromIndex];
  const newArray = removeItemAtIndex(array, fromIndex);

  return insertItemAtIndex(newArray, item, toIndex);
};

export { moveItem };
