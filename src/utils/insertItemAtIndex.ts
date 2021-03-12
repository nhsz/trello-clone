const insertItemAtIndex = <T>(array: T[], item: T, index: number) => {
  return [...array.slice(0, index), item, ...array.slice(index)];
};

export { insertItemAtIndex };
