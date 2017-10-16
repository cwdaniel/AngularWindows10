import { Component, OnInit } from '@angular/core';
import { Store, State } from '@ngrx/store';
import { AppState } from '../../../../store/app.reducers';
import { CreateWindow } from '../../../store/windows.actions';
@Component({
   selector: 'app-icons',
   templateUrl: './icons.component.html',
   styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {

   constructor(private _store: Store<AppState>) { }

   ngOnInit() {
   }
   openApp() {
      this._store.dispatch(new CreateWindow('Test Window', false));
   }
}
