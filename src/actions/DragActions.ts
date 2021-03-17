import { DragItem } from '../dragItem';

export type DragAction = {
  type: 'SET_DRAGGED_ITEM';
  payload: DragItem | undefined;
};
