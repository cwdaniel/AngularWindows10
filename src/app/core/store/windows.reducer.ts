import * as windowActions from './windows.actions';

export interface IWindow {
      windowId: number;
      windowTitle: string;
      windowShowSideBar: boolean;
      isMaximized: boolean;
      windowTitleIcon: string;
      backgroundColor: string;
      borderColor: string;
      secondaryBackgroundColor: string;
      isWindowActive: boolean;
      // ToDo add later dawg
      // fileBar: {
      //       isTitledBarShown: boolean;
      //       options: string[]
      // };
}
export interface WindowState {
      windows: IWindow[];
}

const initialState: WindowState = {
      windows: [],
};
export const update = (state, mutations) =>
      Object.assign({}, state, mutations);

export function reducer(state = initialState, action: windowActions.WindowActions): WindowState {

      switch (action.type) {
            case windowActions.CREATE_WINDOW:
                  return Object.assign({}, state, {
                        windows: state.windows.concat(Object.assign({}, {
                              windowId: state.windows.length + 1,
                              windowTitle: action.windowTitle,
                              windowShowSideBar: action.showSidebar,
                              isMaximized: true,
                              windowTitleIcon: action.windowIcon,
                              backgroundColor: '',
                              borderColor: '',
                              secondaryBackgroundColor: '',
                              isWindowActive: true,
                        }))
                  });
            case windowActions.CLOSE_WINDOW:
                  return Object.assign({}, state, {
                        windows: state.windows.filter(t => t.windowId !== action.windowId),
                  });
            case windowActions.WINDOW_ACTIVE:
                  state.windows.map(t => t.windowId === action.windowId ? t.isWindowActive = true : state);
                  return {
                        ...state
                  };

            case windowActions.WINDOW_NOT_ACTIVE:
                  // iterate over all the windows and set the isWindowActive boolean to false
                  state.windows.map((windows) => windows.isWindowActive === true ? windows.isWindowActive = false : state);
                  return {
                        ...state,
                  };

            default:
                  return state;

      }
}
