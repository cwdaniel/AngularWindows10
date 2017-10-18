import { Action } from '@ngrx/store';

export const ADD_TASKBAR_ICON = '[ADD] Taskbar Icon Added';
export const CLOSE_TASKBAR_ICON = '[CLOSE] Taskbar Icon Closed';
export const REMOVE_ACTIVE = '[IconActive] Removed';
export const ICON_ACTIVE = '[IconActive] Set';

export class AddTaskbarIcon implements Action {
   readonly type = ADD_TASKBAR_ICON;
   constructor(public windowIcon) { }
}
export class CloseTaskbarIcon implements Action {
    readonly type = CLOSE_TASKBAR_ICON;
    constructor(public windowId) {}
}
export class DeactivateTaskbarIcon implements Action {
    readonly type = REMOVE_ACTIVE;
    constructor() {}
}
export class ActivateTaskbarIcon implements Action {
    readonly type = ICON_ACTIVE;
    constructor(public windowId) {}
}

export type TaskbarActions = AddTaskbarIcon | CloseTaskbarIcon | DeactivateTaskbarIcon | ActivateTaskbarIcon;
