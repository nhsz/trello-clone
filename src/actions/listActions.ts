export type ListAction =
  | {
      type: 'ADD_LIST';
      payload: string;
    }
  | {
      type: 'EDIT_LIST';
      payload: string;
    }
  | {
      type: 'REMOVE_LIST';
      payload: string;
    }
  | {
      type: 'MOVE_LIST';
      payload: {
        dragIndex: number;
        hoverIndex: number;
      };
    }
  | {
      type: 'ARCHIVE_ALL_TASKS';
      payload: string;
    }
  | {
      type: 'MOVE_ALL_TASKS_IN_THIS_LIST';
      payload: string;
    };
