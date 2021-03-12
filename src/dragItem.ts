import { ReactNode } from 'react';

interface ListDragItem {
  type: 'LIST';
  id: string;
  text: string;
  listIndex: number;
  children: ReactNode | null;
}

export interface CardDragItem {
  type: 'CARD';
  id: string;
  text: string;
  listIndex: number;
  listId: string;
}

export type DragItem = ListDragItem | CardDragItem;
