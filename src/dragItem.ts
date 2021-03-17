export interface ListDragItem {
  type: 'LIST';
  id: string;
  title: string;
  index: number;
}

export interface CardDragItem {
  type: 'CARD';
  id: string;
  text: string;
  index: number;
  listId: string;
}

export type DragItem = ListDragItem | CardDragItem;
