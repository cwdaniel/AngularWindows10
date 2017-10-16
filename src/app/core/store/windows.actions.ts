import { Action } from '@ngrx/store';

export const CREATE_WINDOW = '[CREATE] Window created ';
export const CLOSE_WINDOW = '[CLOSE] Window Closed';
export const MINIMIZE_WINDOW = '[MINIMIZE] Window min';
export const MAXIMIZE_WINDOW = '[MAXIMIZE] Window max';
export const MINIMIZEMAXIMIZED = '[MINMAX] Window Minimize Maximized Size';

export class CreateWindow implements Action {
   readonly type = CREATE_WINDOW;
   constructor(public windowTitle, public showSidebar) { }
}

export class CloseWindow implements Action {
   readonly type = CLOSE_WINDOW;
   constructor(public windowId) { }
}

export type WindowActions = CreateWindow | CloseWindow;
