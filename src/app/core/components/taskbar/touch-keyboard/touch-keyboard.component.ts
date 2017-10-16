import { Component, OnInit } from '@angular/core';
import { ToggleTouchKeyboard } from '../../../store/touch-keyboard.actions';
import { Store, State } from '@ngrx/store';
import { AppState } from '../../../../store/app.reducers';

@Component({
    selector: 'taskbar-touch-keyboard-icon',
    templateUrl: './touch-keyboard.component.html',
    styleUrls: ['./touch-keyboard.component.css']
})
export class TouchKeyboardComponent implements OnInit {

    constructor(private _store: Store<AppState>) { }

    ngOnInit() {

    }
    public touchKeyboardClick = () => this._store.dispatch(new ToggleTouchKeyboard());

}
