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
    };
