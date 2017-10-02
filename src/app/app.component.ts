import { Component } from '@angular/core';
import { NotificationMenuService } from './core/services/notificationMenu.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public SettingsWindow = {
    title: 'Settings Window',
    content: 'An entire thing of content and stuff.',
    showSideBar: false
  };

  constructor(private _notificationMenuService: NotificationMenuService) { }
  public setToggles = () => {
    this._notificationMenuService.toggleNotificationMenu();
  }
  public setTaskbarDown = () => {
    this.setToggles()
    this._notificationMenuService.setTaskbarMouseDown();
  }
  public setTaskbarLeave = () => this._notificationMenuService.setTaskbarMouseLeave();
}

