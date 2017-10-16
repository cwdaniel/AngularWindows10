import { Component, OnInit, Input, Output } from '@angular/core';
import { ResizeEvent } from 'angular-resizable-element';
import { IWindow } from '../../store/windows.reducer';
import { Store, State } from '@ngrx/store';
import { AppState } from '../../../store/app.reducers';
import { CloseWindow } from '../../store/windows.actions';

export interface ResizeObject {
    position: string;
    left: string;
    top: string;
    width: string;
    height: string;
}
@Component({
    selector: 'core-window',
    templateUrl: './window.component.html',
    styleUrls: ['./window.component.css'],
})
export class WindowComponent implements OnInit {
    @Input('windowSettings') windowSettings: IWindow;
    public style: ResizeObject;
    constructor(private _store: Store<AppState>) { }

    ngOnInit() {
    }
    onExit = () => {
      this._store.dispatch(new CloseWindow(this.windowSettings.windowId));
   }
    validate(event: ResizeEvent): boolean {
        const MIN_HEIGHT_PX: number = 300;
        const MIN_WIDTH_PX: number = 500;
        if (event.rectangle.width < MIN_WIDTH_PX || event.rectangle.height < MIN_HEIGHT_PX) {
            return false;
        }
        return true;
    }
    onResizeEnd(event: ResizeEvent): void {
        this.style = {
            position: 'fixed',
            left: `${event.rectangle.left}px`,
            top: `${event.rectangle.top}px`,
            width: `${event.rectangle.width}px`,
            height: `${event.rectangle.height}px`
        };
    }
}

export interface WindowState {
    taskbarData: {
        taskbarIcon: string;
        isDisplayed: boolean;
        contextMenu: string[];
    };
    windowData: {
        windowId: number;
        windowTitle: string;
        isWindowDisplayed: boolean;
        showSideBar: boolean;
        windowTitleIcon: string;
        backgroundColor: string;
        borderColor: string;
        secondaryBackgroundColor: string;
        minHeight: number;
        minWidth: number;
        fileBar: {
            isTitledBarShown: boolean;
            options: string[]
        };
    };
}
