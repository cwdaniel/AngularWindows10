import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NotificationMenuService } from '../../services/notificationMenu.service';
import { Store, State } from '@ngrx/store';
import { AppState } from '../../../store/app.reducers';
import { AddTaskbarIcon } from '../../store/taskbar.actions';

@Component({
  selector: 'core-taskbar',
  templateUrl: './taskbar.component.html',
  styleUrls: ['./taskbar.component.css'],
})
export class TaskbarComponent implements OnInit {
  public isAppHovered = false;
  private taskbarIcons;


  constructor(private _notificationMenuService: NotificationMenuService, private _store: Store<AppState>) { }

  ngOnInit() {
    this._store.subscribe((state) => {
      this.taskbarIcons = state.taskbar.taskbarIcons;
   });
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
