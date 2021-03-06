import { nanoid } from 'nanoid';
import { AppState } from '../contexts';

export type Action =
  | {
      type: 'ADD_TASK';
      payload: string;
      // payload: { text: string; listId: string };
    }
  | {
      type: 'ADD_LIST';
      payload: string;
    };

const appStateReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case 'ADD_TASK': {
      // reducer logic
      return {
        ...state
      };
    }

    case 'ADD_LIST': {
      return {
        lists: [
          ...state.lists,
          {
            id: nanoid(),
            title: action.payload,
            tasks: []
          }
        ]
      };
    }

    default:
      return state;
  }
};

export { appStateReducer };
