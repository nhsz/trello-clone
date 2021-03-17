import { DragItem } from '../dragItem';

interface Params {
  isPreview: boolean | undefined;
  draggedItem: DragItem | undefined;
  itemType: string;
  id: string;
}

const isHidden = ({ isPreview, draggedItem, itemType, id }: Params) => {
  return Boolean(
    !isPreview && draggedItem && draggedItem.type === itemType && draggedItem.id === id
  );
};

export { isHidden };
