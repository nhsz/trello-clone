import { nanoid } from 'nanoid';
import { AppState } from '../contexts';
import { findListIndexById, overrideListAtIndex } from '../utils';

export type Action =
  | {
      type: 'ADD_TASK';
      payload: { text: string; listId: string };
    }
  | {
      type: 'ADD_LIST';
      payload: string;
    }
  | {
      type: 'REMOVE_TASK';
      payload: { taskId: string; listId: string };
    };

const appStateReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case 'ADD_TASK': {
      const targetListIndex = findListIndexById(state.lists, action.payload.listId);
      const targetList = state.lists[targetListIndex];
      const newTargetList = {
        ...targetList,
        tasks: [...targetList.tasks, { id: nanoid(), text: action.payload.text }]
      };

      return {
        ...state,
        lists: overrideListAtIndex(state.lists, newTargetList, targetListIndex)
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

    case 'REMOVE_TASK': {
      const targetListIndex = findListIndexById(state.lists, action.payload.listId);
      const targetList = state.lists[targetListIndex];
      const newTargetList = {
        ...targetList,
        tasks: targetList.tasks.filter(task => task.id !== action.payload.taskId)
      };

      return {
        ...state,
        lists: overrideListAtIndex(state.lists, newTargetList, targetListIndex)
      };
    }

    default:
      return state;
  }
};

export { appStateReducer };
