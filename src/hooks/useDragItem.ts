import { useEffect } from 'react';
import { useDrag } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';
import { DragItem } from '../dragItem';

const useDragItem = (item: DragItem) => {
  const { type } = item;
  const [{ opacity }, drag, preview] = useDrag(() => ({
    type,
    item,
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0 : 1
    })
  }));

  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true });
  }, [preview]);

  return { opacity, drag };
};

export { useDragItem };
