import { Component, OnInit } from '@angular/core';
import { NotificationMenuService } from './core/services/notificationMenu.service';
import { Store, State } from '@ngrx/store';
import { AppState } from './store/app.reducers';
import { CreateWindow, DeActivateWindow } from './core/store/windows.actions';
import { DeactivateTaskbarIcon } from './core/store/taskbar.actions';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    public windows;
    public SettingsWindow = {
        title: 'Settings Window',
        content: 'An entire thing of content and stuff.',
        showSideBar: false
    };

    constructor(private _notificationMenuService: NotificationMenuService, private _store: Store<AppState>) { }
    ngOnInit() {
        this._store.subscribe((state) => {
            this.windows = state.desktop.windows;
        });
    }
    public setToggles = () => {
    }
    public setTaskbarDown = () => {
        this._notificationMenuService.setTaskbarMouseDown();
        this._notificationMenuService.toggleNotificationMenuForEverythingButIcon();
    }
    public setTaskbarLeave = () => this._notificationMenuService.setTaskbarMouseLeave();

    public setDesktopDown = () => {
        this._notificationMenuService.setDesktopMouseDown();
        this._notificationMenuService.toggleNotificationMenuForEverythingButIcon();

    }
    public setDesktopLeave = () => this._notificationMenuService.setDesktopMouseLeave();
    public setWindows() {
        this._store.dispatch(new DeActivateWindow());
        this._store.dispatch(new DeactivateTaskbarIcon());
    }
}
