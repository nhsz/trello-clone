import { useDrag } from 'react-dnd';
import { DragItem } from '../dragItem';
import { useAppState } from './useAppState';

const useDragItem = (item: DragItem) => {
  const { dispatch } = useAppState();
  const { type } = item;

  const [, drag] = useDrag(() => ({
    type,
    item,
    begin: () => dispatch({ type: 'SET_DRAGGED_ITEM', payload: item }),
    end: () => dispatch({ type: 'SET_DRAGGED_ITEM', payload: undefined })
  }));

  return { drag };
};

export { useDragItem };
