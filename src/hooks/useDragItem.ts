import { useEffect } from 'react';
import { useDrag } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';
import { DragItem } from '../dragItem';
import { useAppState } from '../hooks';

const useDragItem = (item: DragItem) => {
  const { dispatch } = useAppState();
  const { type } = item;
  const setDraggedItem = (item?: DragItem) => () =>
    dispatch({ type: 'SET_DRAGGED_ITEM', payload: item });

  const [{ opacity }, drag, preview] = useDrag(() => ({
    type,
    item: () => {
      setDraggedItem(item);
      return item;
    },
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0 : 1
    }),
    end: setDraggedItem()
  }));

  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true });
  }, [preview]);

  return { opacity, drag };
};

export { useDragItem };
