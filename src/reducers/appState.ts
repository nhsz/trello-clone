import { nanoid } from 'nanoid';
import { DragAction, ListAction, TaskAction } from '../actions';
import { AppState } from '../contexts';
import {
  emptyAllOtherLists,
  findListIndexById,
  findTaskList,
  getTasksFromOtherLists,
  insertItemAtIndex,
  moveItem,
  overrideListAtIndex,
  removeItemAtIndex
} from '../utils';

export type Action = TaskAction | ListAction | DragAction;
type Reducer = (state: AppState, action: Action) => AppState;

const appStateReducer: Reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK': {
      const { lists } = state;
      const { id, text, addFirst } = action.payload;
      const targetListIndex = findListIndexById(lists, id);
      const targetList = lists[targetListIndex];
      const newTargetList = {
        ...targetList,
        tasks: addFirst
          ? [{ id: nanoid(), text }, ...targetList.tasks]
          : [...targetList.tasks, { id: nanoid(), text }]
      };

      return {
        ...state,
        lists: overrideListAtIndex(lists, newTargetList, targetListIndex)
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
      const { lists } = state;
      const { id, text } = action.payload;
      const listId = findTaskList(lists, id);
      const targetListIndex = findListIndexById(lists, listId);
      const targetList = lists[targetListIndex];
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
        lists: overrideListAtIndex(lists, newTargetList, targetListIndex)
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
      const { lists } = state;
      const listId = action.payload;

      return {
        ...state,
        lists: lists.filter(list => list.id !== listId)
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

    case 'MOVE_LIST_TO_POSITION': {
      const { lists } = state;
      const { listId, index } = action.payload;
      const targetListIndex = findListIndexById(lists, listId);
      const targetList = lists[targetListIndex];
      const updatedLists = removeItemAtIndex(lists, targetListIndex);

      return {
        ...state,
        lists: insertItemAtIndex(updatedLists, targetList, index - 1)
      };
    }

    case 'ARCHIVE_ALL_TASKS': {
      const { lists } = state;
      const listId = action.payload;
      const targetListIndex = findListIndexById(lists, listId);
      const targetList = lists[targetListIndex];
      const newTargetList = {
        ...targetList,
        tasks: []
      };

      return {
        ...state,
        lists: overrideListAtIndex(lists, newTargetList, targetListIndex)
      };
    }

    case 'MOVE_ALL_TASKS_IN_THIS_LIST': {
      const { lists } = state;
      const listId = action.payload;
      const targetListIndex = findListIndexById(lists, listId);
      const targetList = lists[targetListIndex];
      const tasksFromOtherLists = getTasksFromOtherLists(lists, listId);
      const emptyLists = emptyAllOtherLists(lists, listId);

      const newTargetList = {
        ...targetList,
        tasks: targetList.tasks.concat(tasksFromOtherLists)
      };

      return {
        ...state,
        lists: overrideListAtIndex(emptyLists, newTargetList, targetListIndex)
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
