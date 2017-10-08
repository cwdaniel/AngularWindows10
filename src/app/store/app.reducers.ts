import { ActionReducerMap } from '@ngrx/store';

import * as fromAuth from '../auth/store/auth.reducers';

export interface AppState {
  auth: fromAuth.State;
}
export const uiState11: UiState = {
  defaultApps: [{ title: 'string' }],
};

export const reducers: ActionReducerMap<AppState> = {
  auth: fromAuth.authReducer,
};

export interface UiState {
  defaultApps: DefaultApps[];
}

export interface DefaultApps {
  title: string;
}
