import { useDrag } from 'react-dnd';
import { DragItem } from '../dragItem';
import { useAppState } from './useAppState';

const useDragItem = (item: DragItem) => {
  const { dispatch } = useAppState();
  const { type } = item;
  const [, drag] = useDrag({
    type,
    item,
    collect: () => ({
      // when we start dragging, we store the item in app state
      isDragging: () => dispatch({ type: 'SET_DRAGGED_ITEM', payload: item })
    }),
    // when when we stop dragging, we reset the item to undefined
    end: () => dispatch({ type: 'SET_DRAGGED_ITEM', payload: undefined })
  });

  return { drag };
};

export { useDragItem };
