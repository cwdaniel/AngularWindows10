import { Injectable } from '@angular/core';

@Injectable()
export class NotificationMenuService {
    public notificationToggled = false;
    public notificationIconMouseEntered = false;
    public taskbarMouseDown = false;
    constructor() { }

    public toggleNotificationMenu = (): void => {
        if (this.taskbarMouseDown && this.notificationIconMouseEntered) { }
        else {
            if (this.taskbarMouseDown && !this.notificationIconMouseEntered) {
                this.notificationToggled = false;
            }

            if (this.notificationIconMouseEntered) {
                this.notificationToggled = !this.notificationToggled;
            }

            else {
                this.notificationToggled = false;
            }
        }
    }
    public setNotificationIconMouseEnter = () => this.notificationIconMouseEntered = true;
    public setNotificationIconMouseLeave = () => this.notificationIconMouseEntered = false;
    public notificationStatus = () => this.notificationToggled;
    public setTaskbarMouseDown = () => this.taskbarMouseDown = true;
    public setTaskbarMouseLeave = () => this.taskbarMouseDown = false;
}
