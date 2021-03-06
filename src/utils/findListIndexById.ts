interface Item {
  id: string;
}

const findListIndexById = <T extends Item>(items: T[], id: string) => {
  return items.findIndex(item => item.id === id);
};

export { findListIndexById };
