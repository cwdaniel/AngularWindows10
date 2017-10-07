import { Component } from '@angular/core';
import { NotificationMenuService } from './core/services/notificationMenu.service';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    public SettingsWindow = {
        title: 'Settings Window',
        content: 'An entire thing of content and stuff.',
        showSideBar: false
    };

    constructor(private _notificationMenuService: NotificationMenuService) { }
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
}