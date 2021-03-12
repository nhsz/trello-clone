import { ReactNode } from 'react';

interface ListDragItem {
  type: 'LIST';
  id: string;
  listIndex: number;
  text: string;
  children: ReactNode | null;
}

export interface CardDragItem {
  type: 'CARD';
  id: string;
  listIndex: number;
  text: string;
  listId: string | null;
}

export type DragItem = ListDragItem | CardDragItem;
