import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NotificationMenuService } from '../../services/notificationMenu.service';

@Component({
  selector: 'core-taskbar',
  templateUrl: './taskbar.component.html',
  styleUrls: ['./taskbar.component.css'],
})
export class TaskbarComponent implements OnInit {
  public isAppHovered = false;
  constructor(private _notificationMenuService: NotificationMenuService) { }

  ngOnInit() {
  }
  public setHoveredApp = () => {
    this.isAppHovered = true;
  }
  public setAppOut = () => {
    this.isAppHovered = false;
  }
  public toggleNav = () => {
    this._notificationMenuService.iconClicked();
  }
  public enterNotificationnIcon = () => {
    this._notificationMenuService.setNotificationIconMouseEnter();
  }

  public exitNotificationnIcon = () => {
    this._notificationMenuService.setNotificationIconMouseLeave();
  }
}
