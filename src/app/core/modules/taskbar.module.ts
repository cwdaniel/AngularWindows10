import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';


import { TaskbarComponent } from '../components/taskbar/taskbar.component';
import { NotificationMenuComponent } from '../components/taskbar/notification-menu/notification-menu.component';
import { CortanaComponent } from '../components/taskbar/cortana/cortana.component';
import { StartMenuComponent } from '../components/taskbar/start-menu/start-menu.component';
import { TrayComponent } from '../components/taskbar/tray/tray.component';
import { TaskviewComponent } from '../components/taskbar/taskview/taskview.component';
import { PeekComponent } from '../components/taskbar/peek/peek.component';
import { TimeComponent } from '../components/taskbar/time/time.component';

@NgModule({
   declarations: [
      TaskbarComponent,
      NotificationMenuComponent,
      CortanaComponent,
      StartMenuComponent,
      TrayComponent,
      TaskviewComponent,
      PeekComponent,
      TimeComponent,
   ],
   imports: [CommonModule],
   exports: [TaskbarComponent, NotificationMenuComponent],
})
export class TaskbarModule { }
