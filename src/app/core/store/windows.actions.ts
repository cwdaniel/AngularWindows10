import { Action } from '@ngrx/store';

export const CREATE_WINDOW = '[CREATE] Window created ';
export const CLOSE_WINDOW = '[CLOSE] Window Closed';
export const MINIMIZE_WINDOW = '[MINIMIZE] Window min';
export const MAXIMIZE_WINDOW = '[MAXIMIZE] Window max';
export const MINIMIZEMAXIMIZED = '[MINMAX] Window Minimize Maximized Size';
export const WINDOW_ACTIVE = '[WindowAction] Window is active';
export const WINDOW_NOT_ACTIVE = '[WindowAction] Window is not active';

export class CreateWindow implements Action {
    readonly type = CREATE_WINDOW;
    constructor(public windowTitle, public showSidebar, public windowIcon) { }
}

export class CloseWindow implements Action {
    readonly type = CLOSE_WINDOW;
    constructor(public windowId) { }
}
export class ActivateWindow implements Action {
    readonly type = WINDOW_ACTIVE;
    constructor(public windowId) { }
}
export class DeActivateWindow implements Action {
    readonly type = WINDOW_NOT_ACTIVE;
    constructor() { }
}

export type WindowActions = CreateWindow | CloseWindow | ActivateWindow | DeActivateWindow;
