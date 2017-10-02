import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';


import { TaskbarComponent } from './taskbar.component';
import { NotificationMenuComponent } from './notification-menu/notification-menu.component';

@NgModule({
   declarations: [
      TaskbarComponent,
      NotificationMenuComponent,
   ],
   imports: [CommonModule],
   exports: [TaskbarComponent, NotificationMenuComponent],
})
export class TaskbarModule { }