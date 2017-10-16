import { ActionReducerMap } from '@ngrx/store';

import * as fromAuth from '../auth/store/auth.reducers';
import * as fromTouch from '../core/store/touch-keyboard.reducer';

export interface AppState {
  auth: fromAuth.State;
  showTouchKeyboard: fromTouch.TouchKeyboardState;
}

export const reducers: ActionReducerMap<AppState> = {
  auth: fromAuth.authReducer,
  showTouchKeyboard: fromTouch.reducer,
};
