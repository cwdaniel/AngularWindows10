import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TaskbarModule } from './modules/taskbar.module';
import { WindowModule } from './modules/window.module';
import { DesktopModule } from './modules/desktop.module';

@NgModule({
   imports: [
      BrowserModule,
      TaskbarModule,
      WindowModule
   ],
   providers: [],
   bootstrap: [],
   exports: [
      TaskbarModule,
      WindowModule,
      DesktopModule
   ],
   declarations: [],
})
export class CoreModule { }