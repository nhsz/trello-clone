const overrideListAtIndex = <T>(array: T[], newItem: T, targetIndex: number) => {
  return array.map((item, index) => {
    if (index !== targetIndex) {
      return item;
    }

    return newItem;
  });
};

export { overrideListAtIndex };
