import { Action } from '@ngrx/store';

export const ADD_TASKBAR_ICON = '[ADD] Taskbar Icon Added';
export const CLOSE_TASKBAR_ICON = '[CLOSE] Taskbar Icon Closed';


export class AddTaskbarIcon implements Action {
   readonly type = ADD_TASKBAR_ICON;
   constructor(public windowIcon) { }
}
export class CloseTaskbarIcon implements Action {
    readonly type = CLOSE_TASKBAR_ICON;
    constructor(public windowId) {}
}

export type TaskbarActions = AddTaskbarIcon | CloseTaskbarIcon;
