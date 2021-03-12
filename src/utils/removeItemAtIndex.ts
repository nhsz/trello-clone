const removeItemAtIndex = <T>(array: T[], index: number) => {
  return [...array.slice(0, index), ...array.slice(index + 1)];
};

export { removeItemAtIndex };
