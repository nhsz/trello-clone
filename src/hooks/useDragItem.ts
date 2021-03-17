import { useEffect } from 'react';
import { useDrag } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';
import { DragItem } from '../dragItem';
import { useAppState } from '../hooks';

const useDragItem = (item: DragItem) => {
  const { dispatch } = useAppState();
  const { type } = item;
  const setDraggedItem = (item?: DragItem) => {
    dispatch({ type: 'SET_DRAGGED_ITEM', payload: item });
  };

  const [, drag, preview] = useDrag(() => ({
    type,
    item: () => {
      setDraggedItem(item);
      return item;
    },
    end: () => setDraggedItem(undefined)
  }));

  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true });
  }, [preview]);

  return { drag };
};

export { useDragItem };
