import { DragItem } from '../dragItem';

const isHidden = (draggedItem: DragItem | undefined, itemType: string, id: string) => {
  if (draggedItem) {
    return draggedItem.type === itemType && draggedItem.id === id;
  } else {
    return false;
  }
};

export { isHidden };
