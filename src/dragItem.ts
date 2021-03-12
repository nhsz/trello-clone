import { ReactNode } from 'react';

type ListDragItem = {
  id: string;
  index: number;
  text: string;
  type: 'COLUMN';
  children: ReactNode | null;
};

export type DragItem = ListDragItem;
