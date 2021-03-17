import { useDrop } from 'react-dnd';
import { DragItem } from '../dragItem';
import { useAppState } from '../hooks';

interface Params {
  id: string;
  index: number;
}

const useDropList = ({ id, index }: Params) => {
  const { dispatch } = useAppState();
  const [, drop] = useDrop({
    accept: ['LIST', 'CARD'],
    hover(item: DragItem) {
      if (item.type === 'LIST') {
        const dragIndex = item.index;
        const hoverIndex = index;

        if (dragIndex === hoverIndex) return;

        dispatch({
          type: 'MOVE_LIST',
          payload: { dragIndex, hoverIndex }
        });

        item.index = hoverIndex;
      } else {
        const dragIndex = item.index;
        const hoverIndex = 0;
        const sourceListId = item.listId;
        const targetListId = id;

        if (sourceListId === targetListId) return;

        dispatch({
          type: 'MOVE_TASK',
          payload: { dragIndex, hoverIndex, sourceListId, targetListId }
        });

        item.index = hoverIndex;
        item.listId = targetListId;
      }
    }
  });

  return { drop };
};

export { useDropList };
