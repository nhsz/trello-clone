import { useDrop } from 'react-dnd';
import { CardDragItem } from '../dragItem';
import { useAppState } from '../hooks';

interface Params {
  id: string;
  index: number;
  listId: string;
}

const useDropCard = ({ id, index, listId }: Params) => {
  const { dispatch } = useAppState();
  const [, drop] = useDrop({
    accept: 'CARD',
    hover(item: CardDragItem) {
      if (item.id === id) return;

      const dragIndex = item.index;
      const hoverIndex = index;
      const sourceListId = item.listId;
      const targetListId = listId;

      if (dragIndex === hoverIndex) return;

      dispatch({
        type: 'MOVE_TASK',
        payload: { dragIndex, hoverIndex, sourceListId, targetListId }
      });

      item.index = hoverIndex;
      item.listId = targetListId;
    }
  });

  return { drop };
};

export { useDropCard };
