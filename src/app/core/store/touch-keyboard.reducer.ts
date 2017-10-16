import * as touchKeyboard from './touch-keyboard.actions';

export interface TouchKeyboardState {
    showTouchKeyboard: boolean;
}

const initialState: TouchKeyboardState = {
    showTouchKeyboard: false
};
export function reducer(state = initialState, action: touchKeyboard.TouchKeyboardActions): TouchKeyboardState {

    switch (action.type) {
        case touchKeyboard.TOGGLE_TOUCH_KEYBOARD:
            return { ...state, showTouchKeyboard: !state.showTouchKeyboard };
        default:
            return state;
    }
}

export const getTouchKeyboardState = (state: TouchKeyboardState) => state.showTouchKeyboard;
