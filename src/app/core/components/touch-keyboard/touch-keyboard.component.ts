import { Component, OnInit } from '@angular/core';
import { ToggleTouchKeyboard } from '../../store/touch-keyboard.actions';
import { Store, State } from '@ngrx/store';
import { AppState } from '../../../store/app.reducers';

@Component({
  selector: 'app-touch-keyboard',
  templateUrl: './touch-keyboard.component.html',
  styleUrls: ['./touch-keyboard.component.css']
})
export class TouchKeyboardComponent implements OnInit {
  public showKeyboard = false;
  public KeyboardWindow = {
    title: '',
    content: '',
    showSideBar: false
  };
  constructor(private _store: Store<AppState>) { }

  ngOnInit() {
    this._store.subscribe((state) => {
      this.showKeyboard = state.showTouchKeyboard.showTouchKeyboard;
    });
  }
  public getKeyboardState = () => this.showKeyboard;
  public close = () => this._store.dispatch(new ToggleTouchKeyboard());
}
