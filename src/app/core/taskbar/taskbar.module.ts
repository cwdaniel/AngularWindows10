import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';


import { TaskbarComponent } from './taskbar.component';
import { NotificationMenuComponent } from './notification-menu/notification-menu.component';
import { CortanaComponent } from './cortana/cortana.component';
import { StartMenuComponent } from './start-menu/start-menu.component';
import { TrayComponent } from './tray/tray.component';
import { TaskviewComponent } from './taskview/taskview.component';
import { PeekComponent } from './peek/peek.component';
import { TimeComponent } from './time/time.component';

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
