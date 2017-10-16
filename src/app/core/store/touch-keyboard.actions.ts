import { Action } from '@ngrx/store';

export const TOGGLE_TOUCH_KEYBOARD = '[ToggleTouchKeyboard] TOGGLE_TOUCH_KEYBOARD';


export class ToggleTouchKeyboard implements Action {
    readonly type = TOGGLE_TOUCH_KEYBOARD;
    constructor() {

    }
}

export type TouchKeyboardActions = ToggleTouchKeyboard;
