import * as taskbarActions from './taskbar.actions';

export interface ITaskbarIcon {
      windowId: number;
      windowTitleIcon: string;
      isActive: boolean;
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
                              isActive: true,
                        }))
                  });
            case taskbarActions.CLOSE_TASKBAR_ICON:
                  return Object.assign({}, state, {
                        taskbarIcons: state.taskbarIcons.filter(t => t.windowId !== action.windowId),
                  });
            case taskbarActions.ICON_ACTIVE:
                  state.taskbarIcons.map(t => t.windowId === action.windowId ? t.isActive = true : state);
                  return {
                        ...state
                  };
            case taskbarActions.REMOVE_ACTIVE:
                  state.taskbarIcons.map((icons) => icons.isActive === true ? icons.isActive = false : state);
                  return {
                        ...state,
                  };
            default:
                  return state;

      }
}
