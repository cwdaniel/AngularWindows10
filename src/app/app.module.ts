import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CoreModule } from './core/core.module';
import { AppsModule } from './apps/apps.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { NotificationMenuService } from './core/services/notificationMenu.service';
import { AngularDraggableModule } from 'angular2-draggable';


@NgModule({
   declarations: [
      AppComponent,
   ],
   imports: [
      BrowserModule,
      CommonModule,
      FormsModule,
      HttpModule,
      CoreModule,
      AppsModule,
      AngularDraggableModule
   ],
   providers: [NotificationMenuService],
   bootstrap: [AppComponent]
})
export class AppModule { }
