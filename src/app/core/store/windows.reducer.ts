import * as windowActions from './windows.actions';

export interface IWindow {
   windowId: number;
   windowTitle: string;
   windowShowSideBar: boolean;
}
export interface WindowState {
   windows: IWindow[];
}

const initialState: WindowState = {
   windows: [],
};
export function reducer(state = initialState, action: windowActions.WindowActions): WindowState {

   switch (action.type) {
      case windowActions.CREATE_WINDOW:

         return Object.assign({}, state, {
            windows: state.windows.concat(Object.assign({}, {
               windowId: state.windows.length + 1,
               windowTitle: action.windowTitle,
               windowShowSideBar: action.showSidebar,
            }))
         });
      case windowActions.CLOSE_WINDOW:
         return Object.assign({}, state, {
            windows: state.windows.filter(t => t.windowId !== action.windowId),
         });
      default:
         return state;

   }
}
// }
// window = {
//    windowId: state.windows.reduce((prev, current) => (prev.windowId > current.windowId) ? prev : current).windowId + 1,
//    windowTitle: action.windowTitle,
//    windowShowSideBar: action.showSidebar,
// }