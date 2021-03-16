import { nanoid } from 'nanoid';
import { ListAction, TaskAction } from '../actions';
import { AppState } from '../contexts';
import { DragItem } from '../dragItem';
import {
  findListIndexById,
  findTaskList,
  insertItemAtIndex,
  moveItem,
  overrideListAtIndex,
  removeItemAtIndex
} from '../utils';

export type Action =
  | TaskAction
  | ListAction
  | {
      type: 'SET_DRAGGED_ITEM';
      payload: DragItem | undefined;
    };

const appStateReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case 'ADD_TASK': {
      const { id, text } = action.payload;
      const targetListIndex = findListIndexById(state.lists, id);
      const targetList = state.lists[targetListIndex];
      const newTargetList = {
        ...targetList,
        tasks: [...targetList.tasks, { id: nanoid(), text }]
      };

      return {
        ...state,
        lists: overrideListAtIndex(state.lists, newTargetList, targetListIndex)
      };
    }

    case 'ADD_LIST': {
      return {
        ...state,
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

    case 'EDIT_TASK': {
      const { id, text } = action.payload;
      const listId = findTaskList(state.lists, id);
      const targetListIndex = findListIndexById(state.lists, listId);
      const targetList = state.lists[targetListIndex];
      const newTargetList = {
        ...targetList,
        tasks: targetList.tasks.map(task => {
          if (task.id === id) {
            return {
              ...task,
              text
            };
          }

          return task;
        })
      };

      return {
        ...state,
        lists: overrideListAtIndex(state.lists, newTargetList, targetListIndex)
      };
    }

    case 'REMOVE_TASK': {
      const { lists } = state;
      const taskId = action.payload;
      const listId = findTaskList(lists, taskId);
      const targetListIndex = findListIndexById(lists, listId);
      const targetList = lists[targetListIndex];
      const newTargetList = {
        ...targetList,
        tasks: targetList.tasks.filter(task => task.id !== taskId)
      };

      return {
        ...state,
        lists: overrideListAtIndex(lists, newTargetList, targetListIndex)
      };
    }

    case 'REMOVE_LIST': {
      const listId = action.payload;

      return {
        ...state,
        lists: state.lists.filter(list => list.id !== listId)
      };
    }

    case 'MOVE_TASK': {
      const { lists } = state;
      const { dragIndex, hoverIndex, sourceListId, targetListId } = action.payload;

      const sourceListIndex = findListIndexById(lists, sourceListId);
      const targetListIndex = findListIndexById(lists, targetListId);

      const sourceList = lists[sourceListIndex];
      const task = sourceList.tasks[dragIndex];

      const updatedSourceList = {
        ...sourceList,
        tasks: removeItemAtIndex(sourceList.tasks, dragIndex)
      };
      const stateWithUpdatedSourceList = {
        ...state,
        lists: overrideListAtIndex(lists, updatedSourceList, sourceListIndex)
      };

      const targetList = stateWithUpdatedSourceList.lists[targetListIndex];
      const updatedTargetList = {
        ...targetList,
        tasks: insertItemAtIndex(targetList.tasks, task, hoverIndex)
      };

      return {
        ...stateWithUpdatedSourceList,
        lists: overrideListAtIndex(
          stateWithUpdatedSourceList.lists,
          updatedTargetList,
          targetListIndex
        )
      };
    }

    case 'MOVE_LIST': {
      const { lists } = state;
      const { dragIndex, hoverIndex } = action.payload;

      return {
        ...state,
        lists: moveItem(lists, dragIndex, hoverIndex)
      };
    }

    case 'SET_DRAGGED_ITEM': {
      return {
        ...state,
        draggedItem: action.payload
      };
    }

    default:
      return state;
  }
};

export { appStateReducer };
