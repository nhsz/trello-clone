export type TaskAction =
  | {
      type: 'ADD_TASK';
      payload: { id: string; text: string; addFirst?: boolean };
    }
  | {
      type: 'EDIT_TASK';
      payload: { id: string; text: string };
    }
  | {
      type: 'REMOVE_TASK';
      payload: string;
    }
  | {
      type: 'MOVE_TASK';
      payload: {
        dragIndex: number;
        hoverIndex: number;
        sourceListId: string;
        targetListId: string;
      };
    };
