export type TaskAction =
  | {
      type: 'ADD_TASK';
      payload: { listId: string; text: string };
    }
  | {
      type: 'EDIT_TASK';
      payload: { taskId: string; text: string };
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
