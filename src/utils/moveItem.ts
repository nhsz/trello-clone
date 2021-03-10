const removeItemAtIndex = <T>(array: T[], index: number) => {
  return [...array.slice(0, index), ...array.slice(index + 1)];
};

const insertItemAtIndex = <T>(array: T[], item: T, index: number) => {
  return [...array.slice(0, index), item, ...array.slice(index)];
};

const moveItem = <T>(array: T[], fromIndex: number, toIndex: number) => {
  const item = array[fromIndex];
  const newArray = removeItemAtIndex(array, fromIndex);

  return insertItemAtIndex(newArray, item, toIndex);
};

export { moveItem };
