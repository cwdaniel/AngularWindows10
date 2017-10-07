import { Injectable } from '@angular/core';

@Injectable()
export class NotificationMenuService {
    public notificationToggled = false;
    public notificationIconMouseEntered = false;
    public taskbarMouseDown = false;
    public notclicked = false;
    public desktopMouseDown = false;

    constructor() { }

    public toggleNotificationMenuForEverythingButIcon = (): void => {
        if ((this.desktopMouseDown) || (this.taskbarMouseDown && !this.notificationIconMouseEntered)) {
            this.notificationToggled = false;
        }
    }
    public iconClicked = (): boolean => this.notificationToggled = !this.notificationToggled;
    public setDesktopMouseDown = (): boolean => this.desktopMouseDown = true;
    public setDesktopMouseLeave = (): boolean => this.desktopMouseDown = false;
    public setNotificationIconMouseEnter = (): boolean => this.notificationIconMouseEntered = true;
    public setNotificationIconMouseLeave = (): boolean => this.notificationIconMouseEntered = false;
    public notificationStatus = (): boolean => this.notificationToggled;
    public setTaskbarMouseDown = (): boolean => this.taskbarMouseDown = true;
    public setTaskbarMouseLeave = (): boolean => this.taskbarMouseDown = false;
}
