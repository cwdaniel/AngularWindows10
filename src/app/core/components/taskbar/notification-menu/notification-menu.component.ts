import { Component, OnInit } from '@angular/core';
import { NotificationMenuService } from '../../../services/notificationMenu.service';
@Component({
    selector: 'core-notification-menu',
    templateUrl: './notification-menu.component.html',
    styleUrls: ['./notification-menu.component.css'],
})
export class NotificationMenuComponent implements OnInit {
    constructor(private _notificationMenuService: NotificationMenuService) { }
    public areIconsExpanded = false;
    ngOnInit() {
    }

    public getToggleStatus = () => this._notificationMenuService.notificationStatus();
    public toggleIcons = () => this.areIconsExpanded = !this.areIconsExpanded;
    public getExpandText = () => this.areIconsExpanded ? 'Collapse' : 'Exapnd';
}
