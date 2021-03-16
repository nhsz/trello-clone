import { ReactNode } from 'react';

export interface ListDragItem {
  type: 'LIST';
  id: string;
  text: string;
  index: number;
  children: ReactNode | null;
}

export interface CardDragItem {
  type: 'CARD';
  id: string;
  text: string;
  index: number;
  listId: string;
}

export type DragItem = ListDragItem | CardDragItem;
