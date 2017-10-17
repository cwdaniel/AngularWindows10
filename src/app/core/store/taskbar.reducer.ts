import * as taskbarActions from './taskbar.actions';

export interface ITaskbarIcon {
      windowId: number;
      windowTitleIcon: string;
}
export interface TaskbarState {
      taskbarIcons: ITaskbarIcon[];
}

const initialState: TaskbarState = {
      taskbarIcons: [],
};
export function reducer(state = initialState, action: taskbarActions.TaskbarActions): TaskbarState {

      switch (action.type) {
            case taskbarActions.ADD_TASKBAR_ICON:

                  return Object.assign({}, state, {
                        taskbarIcons: state.taskbarIcons.concat(Object.assign({}, {
                              windowId: state.taskbarIcons.length + 1,
                              windowTitleIcon: action.windowIcon,
                        }))
                  });
            case taskbarActions.CLOSE_TASKBAR_ICON:
                  return Object.assign({}, state, {
                        taskbarIcons: state.taskbarIcons.filter(t => t.windowId !== action.windowId),
                  });
            default:
                  return state;

      }
}
